import React, { useContext } from 'react';

import { useTasks } from '../hooks';
import { SelectedTabContext } from '../contexts';

export const Tasks = () => {
  const [selectedTab] = useContext(SelectedTabContext);
  const { tasks } = useTasks();

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="tab-name">{selectedTab?.name}</h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
