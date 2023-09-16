import React from 'react';
import AddTaskModal from './AddTaskModal';

const AddtaskModalCover = ({ isOpen, setData, closeModal, openModal}) => {
    return (
        <AddTaskModal isOpen={isOpen} setIsOpen={setData} closeModal={closeModal} openModal={openModal}>

        </AddTaskModal>
    );
};

export default AddtaskModalCover;