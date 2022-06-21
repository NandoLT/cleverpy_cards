import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../App/hooks';
import { fetchPosts, selectPostsListData } from '../../../features/posts/postsSlice';
import { Card } from './Card';
// import { ModalAdvisor } from '../../commons/ModalAdvisor';

import '../../../assets/css/Card.css';

export const CardsContainer = () => {

  let posts = useAppSelector(selectPostsListData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      {/* <ModalAdvisor title={'Este es el título'} message={'este es el message'} actionButton={'ACCION'}/> */}
      <div className='card-container'>
        <Card postsInfo={posts}/>
      </div>
    </>
  )
}
