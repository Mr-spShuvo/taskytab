import React from 'react';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

export const Modal = ({ state, title, isForm = true, onSubmit, onReset, hasError, children }) => {
  const [isOpen, setIsOpen] = state;
  if (!isOpen) return null;

  console.log(hasError);

  const handleClose = event => {
    event.preventDefault();
    onReset();
    setIsOpen(false);
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <h3>{title}</h3>
          <button className="btn modal__close" onClick={handleClose} title="Close">
            <MdClose />
          </button>
        </div>
        <div className="modal__body">
          {isForm ? (
            <form className="form form--add-tab" onSubmit={onSubmit}>
              {children}
              <div className="form__actions">
                <button className="btn btn--neutral btn--lg" type="button" onClick={handleClose}>
                  Cancel
                </button>
                <button className="btn btn--main btn--lg" type="submit" disabled={hasError}>
                  Save
                </button>
              </div>
            </form>
          ) : (
            children
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
