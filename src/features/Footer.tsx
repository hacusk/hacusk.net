import React, { useState } from 'react';
import { ModalComponent } from '../components';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = () =>  {
    return (
      <div className="license">
        <h1>モーダル</h1>
      </div>
    )
  }

  return (
    <div className="footer">
      <h3>footer!</h3>
        <div onClick={()=>setIsModalOpen(true)}>
          <h3>ボタン</h3>
        </div>
        <ModalComponent modalIsOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)} children={modalContent()} contentLabel="license-modal" />
    </div>
  )
}

export default Footer;
