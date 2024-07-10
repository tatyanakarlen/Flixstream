import React from 'react'
import { Modal } from 'react-bootstrap'

const AuthModal = ( {show, handleCloseAuthModal} ) => {
  return (
    <Modal show={show} onHide={handleCloseAuthModal}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    <Modal.Footer>
   
    </Modal.Footer>
  </Modal>
   
  )
}

export default AuthModal
