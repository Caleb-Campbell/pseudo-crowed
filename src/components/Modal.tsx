import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Button from "./Buttons";

const Modal = ({ isOpen, onClose, classNames = "", children }
:{
    isOpen: boolean
    onClose: () => void
    classNames?: string
    children: React.ReactNode
}
) => {

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-50"></div>
      <div className={`bg-alt min-w-[200px] p-4 shadow-lg z-40 ${classNames}`}>
        <Button onClick={onClose} className="relative float-right top-1 right-3 w-12 hover:bg-opacity-0 hover:scale-105 transition-transform mt-0 pt-0" variant='secondary'>
            <XCircleIcon width={40} />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
