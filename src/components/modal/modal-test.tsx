import { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div style={{ zIndex: 2 }}>
      <button
        onClick={() => {
          setShowModal((prev) => {
            return !prev;
          });
        }}
      >
        Open Modal
      </button>
      {showModal && (
        <Modal onClose={onClose} body={<div>Customized body</div>} />
      )}
    </div>
  );
};

export default ModalTest;
