"use client";
import React from "react";

import { createPortal } from "react-dom";

const Modal = ({ className, onClose, children }) => {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-[3px] z-[9999]"
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-1/2 rounded-[20px] bg-white z-[9999] min-w-1/3 max-h-min overflow-hidden ${className}`}
      >
        {/* <ModalLight className={"relative left-0 top-1/2 -translate-y-1/2"} /> */}
        <div className=" relative  z-[350] p-10 overflow-auto max-h-[85vh]">
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
