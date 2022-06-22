import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../App/hooks';
import { fetchPosts, selectPostsListData } from '../../../features/posts/postsSlice';
import { Card } from './Card';

import '../../../assets/css/Card.css';

export const CardsContainer = () => {

  let posts = useAppSelector(selectPostsListData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      <div className='card-container'>
        {
          posts.length > 0 ?
            <Card postsInfo={posts}/>
            :
            <div>
              <h2>No Post availables</h2>
            </div>
        }
      </div>
    </>
  )
}
