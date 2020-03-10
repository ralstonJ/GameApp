import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Header = styled.h2`
  color: #f00;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ErrorModal = ({ showModal, message, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={onClose}
        style={customStyles}
        appElement={document.getElementById('root')}
      >
        <Header>Warning</Header>
        <div> {message} </div>
        <Footer>
          <button onClick={onClose}>OK</button>
        </Footer>
      </Modal>
    </div>
  );
};

export default ErrorModal;
