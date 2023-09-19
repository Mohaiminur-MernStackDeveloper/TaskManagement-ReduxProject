import React from "react";
import AddTaskModal from "./AddTaskModal";

const AddtaskModalCover = ({ isOpen, setData, closeModal, openModal }) => {
  return (
    <AddTaskModal
      isOpen={isOpen}
      setIsOpen={setData}
      closeModal={closeModal}
      openModal={openModal}
    >
      <form className="space-y-3">
        <input className="w-full border outline-none px-3 py-1 rounded-md text-sm" type="text" name="TaskName" placeholder="Task Name" />
        <input className="w-full border outline-none px-3 py-1 rounded-md text-sm" type="text" name="TaskName" placeholder="Task Name" />
      </form>
    </AddTaskModal>
  );
};

export default AddtaskModalCover;
