import React from 'react';
import UseAnimations from "react-useanimations";
import trash from 'react-useanimations/lib/trash2';
import { GrEdit } from 'react-icons/gr';
import { ModalAdvisor } from '../../commons/ModalAdvisor';

interface Props {
    postId: number
}

export const ActionsCard = ({postId}: Props) => {

    const deleteItem = () => {
        console.log(postId);
    }

    const updateItem = () => {
        console.log(postId);
    }

    const handleAction = (action:string) => {
        console.log('ACTION', action)
    }

    return (
        <>
        <ModalAdvisor title={'Este es el título'} message={'este es el message'} actionButton={'ACCION'}/>
        <div className="Container-actions">
            <button onClick={() => handleAction('delete')}>
                <UseAnimations animation={trash} className="trash-icon" />
            </button>
            <button onClick={() => handleAction('update')}>
                <GrEdit className="pencil-icon"/>
            </button>
        </div>
        </>
    )
}
