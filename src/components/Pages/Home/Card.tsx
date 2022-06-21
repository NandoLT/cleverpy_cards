import React from 'react'
import { ActionsCard } from './ActionsCard';
import { PostType } from '../../../types';



interface Props {
    postsInfo: Array<PostType>
} 

export const Card = ({postsInfo}: Props) => {
    
    return (
        <>
            {postsInfo.map (post => {
                return (
                    <div className="Card-item">
                        <div className="Card-item__title">
                            {post.title}
                        </div>    
                        <div className="Card-item__userInfo">
                            <div className="userInfo__userId">User ID: {post.userId}</div>
                            <div className="userInfo__postId">Post ID: {post.id}</div>
                        </div>    
                        <div className="Card-item__body">
                            {post.body}
                        </div>
                        <ActionsCard postId={post.id}/>    
                    </div>
                    )
                })
            }
        </>
    )
}
