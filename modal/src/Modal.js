import React, { useState, useCallback } from "react";
import "./Modal.css";

function Modal({ open, close, handleText, header, children }) {
  const [content, setContent] = useState("");

  const onChange = useCallback((e) => {
    setContent(e.target.value);
  });

  const onClick = useCallback(() => {
    handleText(content);
    setContent("");
    close();
  });

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              X
            </button>
          </header>

          <main>{children}</main>

          <input type="text" value={content} onChange={onChange}></input>
          <input type="button" value="등록" onClick={onClick}></input>

          <footer>
            <button className="close" onClick={close}>
              CLOSE
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;
