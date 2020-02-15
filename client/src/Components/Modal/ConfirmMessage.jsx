  
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ConfirmMessage = (title, message, link, button) => (
  <Modal show animation={false}>
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {message}
    </Modal.Body>
    <Modal.Footer>
      <Link to={link} className="btn btn-primary">{button}</Link>
    </Modal.Footer>
  </Modal>
);

export default ConfirmMessage;