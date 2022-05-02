import { useState } from "react";

const ModalSwitch = () => {
  const [showModal, setShowModal] = useState(false);
  function toggle() {
    setShowModal(!showModal);
  }
  return { toggle, showModal };
};

export default ModalSwitch;
