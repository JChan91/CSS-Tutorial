import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [text, setText] = useState("");

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    console.log("hi 😀");
    setIsModal(false);
  };

  const handleText = (content) => {
    setText(content);
  };

  return (
    <div className="App">
      <button onClick={openModal}>모달 팝업</button>

      <Modal
        open={isModal}
        close={closeModal}
        handleText={handleText}
        header="Modal Heading"
      >
        모달 팝업창
      </Modal>

      <div>{text}</div>
    </div>
  );
}

export default App;
