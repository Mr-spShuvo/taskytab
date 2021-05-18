/* eslint-disable react/display-name */
import React, { useContext, useEffect } from 'react';
import { TwitterPicker } from 'react-color';
import { FaCircle } from 'react-icons/fa';

import { db } from '../firebase';
import { Input, Modal } from '../common';
import { useForm } from '../hooks';
import { getDocsWithId } from '../utils';
import { AuthContext, SelectedTabContext } from '../contexts';

const initialState = {
  input: {
    name: '',
    color: '#22194D'
  },
  error: { name: '' },
  isDisabled: true
};

export const ModalAddTab = ({ state: modalState }) => {
  const { user } = useContext(AuthContext);
  const setSelectedTab = useContext(SelectedTabContext)[1];
  const { state, dispatch, actionTypes, handleReset } = useForm(initialState);
  const { error, input, isDisabled } = state;

  useEffect(() => {
    if (error.name || !input.name)
      dispatch({ type: actionTypes.DISABLED, payload: { isDisabled: true } });
    else dispatch({ type: actionTypes.DISABLED, payload: { isDisabled: false } });
  }, [error.name, input.name, actionTypes.DISABLED, dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    dispatch({ type: actionTypes.ERROR, error: { field: name, message: '' } });

    if (name === 'name' && value.length === 0)
      dispatch({
        type: actionTypes.ERROR,
        error: { field: name, message: 'Name is required' }
      });
    if (name === 'name' && value.length >= 30)
      dispatch({
        type: actionTypes.ERROR,
        error: { field: name, message: 'Must be less than 30 characters' }
      });

    dispatch({
      type: actionTypes.SUCCESS,
      payload: { field: name, value }
    });
  };

  const handleSubmit = async () => {
    const tabRef = await db.collection('tabs').add({ ...input, userId: user.id });
    const tab = await tabRef.get();
    const newTab = getDocsWithId(tab);
    setSelectedTab(newTab);
    handleReset();
  };

  const handleColorChange = ({ hex: color }) => {
    dispatch({
      type: actionTypes.SUCCESS,
      payload: { field: 'color', value: color }
    });
  };

  return (
    <Modal
      state={modalState}
      title="Add New Task"
      isForm={true}
      onSubmit={handleSubmit}
      onReset={handleReset}
      isDisabled={isDisabled}
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
