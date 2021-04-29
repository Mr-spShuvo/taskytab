import React from 'react';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

export const Modal = ({ state, children }) => {
  const [isOpen, setIsOpen] = state;
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        <button className="btn modal__close" onClick={handleClose} title="Close">
          <MdClose />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
