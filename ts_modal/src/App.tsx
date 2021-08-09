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
      <Modal isModal={isModal} openModal={openModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
