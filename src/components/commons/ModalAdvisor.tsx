import React from 'react';

import '../../assets/css/ModalAdvisor.css';


interface Props {
  title: string
  message: string
  actionButton: string
}

export const ModalAdvisor = ({title, message, actionButton}: Props) => {
  return (
    <div className="modal">
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <p className='modal-close'>X</p>
        </header>
        <section className="modal-card-body">
        {message}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">{actionButton}</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  )
}
