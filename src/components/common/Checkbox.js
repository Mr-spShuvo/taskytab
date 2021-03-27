import React from 'react';

import { db } from '../../firebase';

export const Checkbox = ({ id }) => {
  const archiveTask = [];

  return (
    <button className="checkbox-holder" data-testid="checkbox-action" onClick={archiveTask} onBlur={archiveTask}>
      <span className="checkbox" />
    </button>
  );
};
