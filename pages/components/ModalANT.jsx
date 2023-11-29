import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({colorUser}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Mostrar color
      </Button>
      <Modal title="Color elegido:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div style={ {backgroundColor:`${colorUser}`, border: "1px solid black", height:"100px"}} ></div>
      
      </Modal>
    </>
  );
};

export default ModalANT;