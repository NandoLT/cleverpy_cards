import React,{useState} from 'react'
import { PostType } from '../../../types';
import UseAnimations from "react-useanimations";
import trash from 'react-useanimations/lib/trash2';
import { GrEdit } from 'react-icons/gr';
import {Modal, Box, Button} from '@mui/material';
import { useAppDispatch } from '../../../App/hooks';
import { deletePost, updatePost } from '../../../features/posts/postsSlice';

import '../../../assets/css/ModalAdvisor.css';


interface Props {
    postsInfo: Array<PostType>
} 

interface modalState {
    title: string
    body: string | null
    actionButton: null | JSX.Element
    visibility: boolean
}

interface editState {
    postid: number
    edition: boolean
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export const Card = ({postsInfo}: Props) => {
    
    const dispatch = useAppDispatch();

    const initialModalState:modalState = {
        title: '',
        body: '',
        actionButton: null,
        visibility: false
    }

    const initialOpenEdit:editState = {
        postid: 0,
        edition: false
    }

    const [modalState, setModalState] = useState(initialModalState);
    const [openEdit, setOpenEdit] = useState(initialOpenEdit);
    const [editionValue, setEditionValue] = useState('');

    const handleOpenClose = () => {
        setModalState({
            ...modalState, 
            visibility: !modalState.visibility
        });
    };

    const handleModalState = (action:string, id:number) => {
        setModalState({
            title: `${action} post ${id}`,
            body: action === 'delete' ? 
                                `Are you sure you want to ${action} post with id: ${id}`
                                : 
                                null,
                                // <div>UPDATE</div>,
            actionButton: action === 'delete' ?
                                        <Button variant='contained' color="error" onClick={() => deleteItem(id)}>DELETE</Button> 
                                        : 
                                        null,
                                        // <Button variant='contained' color="success" onClick={() => activateEdition(id)}>UPDATE</Button>,
            visibility: true
        })
    }
    
    const deleteItem = (id:number) => {
        dispatch(deletePost(id));
        setModalState(initialModalState);
    }

    const activateEdition = (id:number) => {
        setOpenEdit({
            postid: id,
            edition:!openEdit.edition
        });
        setModalState(initialModalState);
    }
    const handleChangeEdition = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditionValue(e.target.value)
    }
    const updateItem = (id:number) => {
        dispatch(updatePost({id, body:editionValue}));
        activateEdition(id);
    }

    return (
        <>

            <Modal
                className='advertModal'
                hideBackdrop
                open={modalState.visibility}
                onClose={handleOpenClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">{modalState.title}</h2>
                <p id="child-modal-description">
                    {modalState.body}
                </p>
                {modalState.actionButton}
                <Button variant="contained" onClick={handleOpenClose}>CANCEL</Button>
                </Box>
            </Modal>

            {postsInfo.length > 0 ?
                postsInfo.map (post => {
                    return (
                        <div className="Card-item" key={post.id}>
                            <div className="Card-item__title">
                                {post.title}
                            </div>    
                            <div className="Card-item__userInfo">
                                <div className="userInfo__userId">User ID: {post.userId}</div>
                                <div className="userInfo__postId">Post ID: {post.id}</div>
                            </div>    
                            <div className="Card-item__body">
                                {openEdit.edition && post.id === openEdit.postid?
                                    <>
                                        <textarea defaultValue={post.body} onChange={handleChangeEdition} className="post-edition"></textarea>
                                        <Button onClick={() => updateItem(post.id)} variant='contained' color="success"> UPDATE</Button>
                                        <Button onClick={() => activateEdition(post.id)} variant='contained'> CANCEL</Button>
                                    </>
                                    :
                                    post.body
                                }   
                            </div>
                            <div className="Container-actions">
                                <button onClick={() => handleModalState('delete', post.id)}>
                                    <UseAnimations animation={trash} className="trash-icon" />
                                </button>
                                <button onClick={() => activateEdition(post.id)}>
                                    <GrEdit className="pencil-icon"/>
                                </button>
                            </div>
                        </div>
                        )
                    })
                    :
                    <h2>Actually there aren`t any post</h2>
            }
        </>
    )
}
