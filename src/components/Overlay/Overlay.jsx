import React from 'react';
import { ModalOverlay } from './Overlay.styled';

const Overlay = ({ children, onClick }) => {
  return <ModalOverlay onClick={onClick}>{children}</ModalOverlay>;
};

export default Overlay;
