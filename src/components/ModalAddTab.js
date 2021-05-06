import React, { useContext, useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';
import { FaCircle } from 'react-icons/fa';

import { Input, Modal } from '../common';
import { SelectedTabContext } from '../contexts';
import { db } from '../firebase';
import { getDocsWithId } from '../utils';

const initialInput = { name: '', color: '#22194D' };
const initialError = { name: '' };

export const ModalAddTab = ({ state }) => {
  const [input, setInput] = useState(() => initialInput);
  const [error, setError] = useState(() => initialError);
  const [hasError, setHasError] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [_selectedTab, setSelectedTab] = useContext(SelectedTabContext);

  useEffect(() => {
    if (error.name || !input.name) setHasError(true);
    else setHasError(false);
  }, [error.name, input.name]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setError({ ...error, [name]: '' });
    if (name === 'name' && value.length === 0)
      setError({ ...error, name: 'Name is required' });
    if (name === 'name' && value.length >= 30)
      setError({ ...error, name: 'Must be less than 30 characters' });
    setInput({ ...input, [name]: value });
  };

  const handleColorChange = ({ hex: color }) => {
    setInput({ ...input, color });
  };

  const handleSubmit = async () => {
    const userId = 'xlipTsb3Pd33p0kmqXSN';
    const tabRef = await db.collection('tabs').add({ ...input, userId });
    const tab = await tabRef.get();
    const newTab = getDocsWithId(tab);
    setSelectedTab(newTab);
    handleReset();
  };

  const handleReset = () => {
    setInput(initialInput);
    setError(initialError);
    setHasError(true);
  };

  return (
    <Modal
      state={state}
      title="Add New Tab"
      isForm={true}
      onSubmit={handleSubmit}
      onReset={handleReset}
      hasError={hasError}
    >
      <Input
        label="Tab Name"
        name="name"
        placeholder="e.g. 👨‍🍳 Cooking"
        value={input.name}
        onChange={handleInputChange}
        error={error.name}
      />
      <div className="form__field form__field--color-picker">
        <label className="form__label" htmlFor="color">
          <FaCircle color={input.color} /> Select Tab Color
        </label>
        <TwitterPicker triangle="hide" onChange={handleColorChange} />
      </div>
    </Modal>
  );
};
