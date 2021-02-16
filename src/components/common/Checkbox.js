/*eslint-disable */
import React from 'react';

import { db } from '../../firebase';

export const Checkbox = id => {
  const archiveTask = () => {
    db.collection('tasks').doc(id).update({
      archive: true
    });
  };

  return (
    <div className="checkbox-holder" data-testid="checkbox-action" onClick={() => archiveTask()} onBlur={() => archiveTask()}>
      <span className="checkbox" />
    </div>
  );
};
