import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

type Props = {
  modalIsOpen: boolean
  closeModal: any
  children: JSX.Element
  style?: any
  contentLabel: string 
}

export default function ModalComponent({ modalIsOpen, closeModal, children, style, contentLabel }: Props) {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={style} contentLabel={contentLabel} >
      {children}
    </Modal>
  )
}