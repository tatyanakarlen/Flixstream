import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const EditForm = ( {show, handleClose}) => {
  return (
    <div>
  

      <Modal show={show} 
      onHide={handleClose}
      >
        <Modal.Header closeButton onClose={handleClose}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default EditForm
