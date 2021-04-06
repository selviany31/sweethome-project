import React, { useState, /*useEffect*/ } from "react";
import Modal from "./SignUpModal";
const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <h6 style={{ margin: 0 }} onClick={openModal}>
        Signup
      </h6>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default SignUp;
