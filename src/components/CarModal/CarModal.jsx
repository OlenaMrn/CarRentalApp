import { GrClose } from 'react-icons/gr';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Overlay from 'components/Overlay/Overlay';
import { CloseModalButton } from './CarModal.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import CarCardModal from './CarCardModal';

const carModalRoot = document.querySelector('#modal-root');

export default function CarModal({ toggleModal, car }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <Overlay onClick={toggleModal}>
      <Modal>
        <CloseModalButton type="button" onClick={toggleModal}>
          <GrClose size={20} />
        </CloseModalButton>
        <CarCardModal toggleModal={toggleModal} car={car} />
      </Modal>
    </Overlay>,
    carModalRoot
  );
}
