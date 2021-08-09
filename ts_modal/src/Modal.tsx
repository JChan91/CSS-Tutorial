import React from "react";

interface modal {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

function Modal({ isModal, openModal, closeModal }: modal) {
  return (
    <div>
      <button onClick={openModal}>OPEN MODAL</button>
    </div>
  );
}

export default Modal;
