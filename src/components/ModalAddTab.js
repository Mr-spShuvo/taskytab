import React, { useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';
import { FaCircle } from 'react-icons/fa';

import { Modal } from '../common/Modal';

const initialInput = { name: '', color: '#22194D' };

export const ModalAddTab = ({ state }) => {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(true);

  useEffect(() => {
    if (input.color && input.name) setError(false);
  }, [input]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleColorChange = ({ hex: color }) => {
    setInput({ ...input, color });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleReset = () => {
    setInput(initialInput);
    setError(true);
  };

  return (
    <Modal state={state} title="Add New Tab" onSubmit={handleSubmit} onReset={handleReset} hasError={error}>
      <div className="form__field">
        <label htmlFor="name" className="form__label">
          Tab Name:
        </label>
        <input className="form__input" value={input.name} type="text" id="name" name="name" placeholder="e.g. 👨‍🍳 Cooking" required onChange={handleInputChange} autoComplete="off" />
      </div>
      <div className="form__field form__field--color-picker">
        <label className="form__label" htmlFor="color">
          <FaCircle color={input.color} /> Select Tab Color
        </label>
        <TwitterPicker triangle="hide" onChange={handleColorChange} />
      </div>
    </Modal>
  );
};
