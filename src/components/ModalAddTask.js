/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Input, Modal, TextArea, Select } from '../common';

// Temp
const inputTabs = [
  { title: '👨‍🍳 Cooking', value: '4ce34ceDfliE45e' },
  { title: '👨‍💻 Coding', value: '4ce34efad4e5e' }
];

const initialInput = {
  title: '',
  tabId: '4ce34efad4e5e',
  description: '',
  date: dayjs().format('YYYY-MM-DD'),
  archived: false
};

const initialError = { title: '', description: '', date: '' };

export const ModalAddTask = ({ state }) => {
  const [input, setInput] = useState(initialInput);
  const [hasError, setHasError] = useState();
  const [error, setError] = useState(initialError);

  useEffect(() => {
    if (error.description || error.title || error.date || !input.title)
      setHasError(true);
    else setHasError(false);
  }, [error.description, error.title, error.date, input.title]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setError({ ...error, [name]: '' });
    if (name === 'title' && value.length === 0)
      setError({ ...error, title: 'Title is required' });
    if (name === 'title' && value.length >= 60)
      setError({ ...error, title: 'Must be less than 60 characters' });
    if (name === 'description' && value.length > 140)
      setError({ ...error, description: 'Cannot exceed more than 140 characters' });
    if (name === 'date' && dayjs(value).valueOf() < dayjs().valueOf())
      setError({ ...error, date: 'Cannot be previous date' });

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    // API Call
    handleReset();
  };

  const handleReset = () => {
    setInput(initialInput);
    setHasError(true);
  };

  return (
    <Modal
      state={state}
      title="Add New Task"
      isForm={true}
      onSubmit={handleSubmit}
      onReset={handleReset}
      hasError={hasError}
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
