import React from "react";
import "./Modal.css";

interface modal {
  isModal: boolean;
  closeModal: () => void;
}

function Modal({ isModal, closeModal }: modal) {
  return (
    <div className={isModal ? "openModal modal" : "modal"}>
      {isModal ? (
        <section>
          <header>
            MODAL
            <button className="closeModal" onClick={closeModal}>
              X
            </button>
          </header>

          <main>
            <div>모달창입니다 :)</div>
          </main>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;
