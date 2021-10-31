import React, { useContext, useEffect, useState } from 'react';
import { Input, Modal } from '../common';
import { AuthContext } from '../contexts';

export const Profile = ({ state }) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(user);
  }, [user]);

  const handleReset = () => {};
  const handleSubmit = () => {};

  if (!user) return null;

  return (
    <Modal
      state={state}
      onReset={handleReset}
      title="Edit Profile"
      isForm
      onSubmit={handleSubmit}
    >
      <Input label="Email" value={data?.email} disabled />
    </Modal>
  );
};
