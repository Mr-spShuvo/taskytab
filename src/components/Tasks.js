import React, { useContext } from 'react';

import { useTasks } from '../hooks';
import { SelectedTabContext } from '../contexts';
import { Task } from '../common';

export const Tasks = () => {
  const [selectedTab] = useContext(SelectedTabContext);
  const { tasks, archivedTasks } = useTasks();

  return (
    <div className="tasks" data-testid="tasks">
      <h2 className="tasks__tab-name" data-testid="tab-name">
        {selectedTab?.name}
      </h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
      <ul className="tasks__list">
        {archivedTasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};
