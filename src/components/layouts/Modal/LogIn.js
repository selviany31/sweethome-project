import React, { useState } from "react";
import Modal from "./LogInModal";

const LogIn = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <h6 style={{ margin: "0px" }} onClick={openModal}>
        Login
      </h6>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default LogIn;
