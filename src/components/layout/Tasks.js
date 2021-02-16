import React from 'react';
import { Checkbox } from '../common/Checkbox';
import { useTasks, useTabs } from '../../hooks';

export const Tasks = () => {
  const { tasks } = useTasks('1');
  const [tabs] = useTabs();

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="tab-name">
        {tabs.map(item => (
          <span key={item.tabId}>{item.name}</span>
        ))}
      </h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
