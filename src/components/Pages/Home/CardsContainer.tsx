import { useState } from 'react';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../App/hooks';
import { fetchPosts, selectPostsListData } from '../../../features/posts/postsSlice';
import { Card } from './Card';
import Loader from '../../commons/Loader';

import '../../../assets/css/Card.css';

export const CardsContainer = () => {

  let posts = useAppSelector(selectPostsListData);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPosts());
    setTimeout(() => {
      setIsLoading(false);
    }, 1500)
  }, [dispatch])

  return (
    <>
        { isLoading ? <Loader />
          :        
      <div className='card-container'>
          {posts.length > 0 ?
            <Card postsInfo={posts}/>
            :
            <div>
              <h2>No Post availables</h2>
            </div>}
      </div>
        }
      {/* <div className='card-container'>
        { isLoading && <Loader />}
        {
          posts.length > 0 ?
            <Card postsInfo={posts}/>
            :
            <div>
              <h2>No Post availables</h2>
            </div>
        }
      </div> */}
    </>
  )
}
