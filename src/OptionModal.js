import React from 'react';
import Modal from 'react-modal';

const OptionalModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleClearOption}
    contentLabel = 'Selected Option'
    >
    <h3>Selected Option:</h3>
    <p>{props.selectedOption}</p>
    <button onClick = {props.handleClearOption}>Thanks!</button>
  </Modal>
);

export default OptionalModal;
