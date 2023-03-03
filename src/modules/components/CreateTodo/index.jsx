import React from "react";
import { useModal } from "../../../hooks/store";

function CreateTodo() {
  const isOpen = useModal((state) => state.isOpen);
  const toggleModal = useModal((state) => state.toggleModal);

  const handleOpen = () => {
    toggleModal(!isOpen);
  };

  return <button onClick={handleOpen}>Create Todo</button>;
}

export { CreateTodo };
