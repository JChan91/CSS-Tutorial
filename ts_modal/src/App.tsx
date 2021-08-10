import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isModal, setIsModal] = useState<boolean>(false);

  const openModal = () => {
    console.log("Modal OPEN");

    setIsModal(true);
  };

  const closeModal = () => {
    console.log("Modal CLOSE");
    setIsModal(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>MODAL</button>
      <Modal isModal={isModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
