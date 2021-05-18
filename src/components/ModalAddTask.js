/* eslint-disable react/display-name */
import React, { useContext, useEffect } from 'react';
import dayjs from 'dayjs';

import { Input, Modal, TextArea, Select } from '../common';
import { useModalForm, useTabs } from '../hooks';
import { SelectedTabContext } from '../contexts';
import { db } from '../firebase';

const initialState = {
  input: {
    title: '',
    tabId: '4ce34efad4e5e',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    archived: false
  },
  error: { title: '', description: '', date: '' },
  isDisabled: true
};

export const ModalAddTask = ({ state: modalState }) => {
  const { state, dispatch, actionTypes, handleReset } = useModalForm(initialState);
  const { error, input, isDisabled } = state;
  const [selectedTab, setSelectedTab] = useContext(SelectedTabContext);
  const [tabs, inboxTab] = useTabs();
  const allTabs = [inboxTab, ...tabs];
  const inputTabs = allTabs.map(tab => ({
    title: tab.name,
    value: tab.id
  }));

  useEffect(() => {
    dispatch({
      type: actionTypes.SUCCESS,
      payload: { field: 'tabId', value: selectedTab.id }
    });
  }, [selectedTab.id, actionTypes.SUCCESS, dispatch]);

  useEffect(() => {
    if (error.description || error.title || error.date || !input.title)
      dispatch({ type: actionTypes.DISABLED, payload: { isDisabled: true } });
    else dispatch({ type: actionTypes.DISABLED, payload: { isDisabled: false } });
  }, [
    error.description,
    error.title,
    error.date,
    input.title,
    actionTypes.DISABLED,
    dispatch
  ]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    dispatch({ type: actionTypes.ERROR, error: { field: name, message: '' } });

    if (name === 'title' && value.length === 0)
      dispatch({
        type: actionTypes.ERROR,
        error: { field: name, message: 'Title is required' }
      });
    if (name === 'title' && value.length >= 60)
      dispatch({
        type: actionTypes.ERROR,
        error: { field: name, message: 'Must be less than 60 characters' }
      });
    if (name === 'description' && value.length > 140)
      dispatch({
        type: actionTypes.ERROR,
        error: {
          field: name,
          message: 'Cannot exceed more than 140 characters'
        }
      });
    if (name === 'date' && dayjs(value).add(1, 'day').valueOf() < dayjs().valueOf())
      dispatch({
        type: actionTypes.ERROR,
        error: {
          field: name,
          message: 'Cannot be previous date'
        }
      });

    dispatch({
      type: actionTypes.SUCCESS,
      payload: { field: name, value }
    });
  };

  const handleSubmit = async () => {
    // eslint-disable-next-line
    const userId = 'xlipTsb3Pd33p0kmqXSN';
    db.collection('tasks').add({ ...state.input, userId });
    if (selectedTab.id !== state.input.tabId) {
      const [tab] = allTabs.filter(tab => tab.id === state.input.tabId);
      setSelectedTab(tab);
    }
    handleReset();
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
        label="Task Title"
        name="title"
        placeholder="e.g. 👨‍🍳 Cooking"
        value={input.name}
        onChange={handleInputChange}
        error={error.title}
      />
      <TextArea
        label="Task Description"
        name="description"
        placeholder="Write about the task..."
        value={input.description}
        onChange={handleInputChange}
        error={error.description}
      />
      <div className="form__group">
        <Select
          defaultValue={input.tabId}
          label="Select Tab"
          name="tabId"
          onChange={handleInputChange}
          options={inputTabs}
        />
        <Input
          label="Due Date"
          name="date"
          type="date"
          value={input.date}
          onChange={handleInputChange}
          error={error.date}
        />
      </div>
    </Modal>
  );
};
