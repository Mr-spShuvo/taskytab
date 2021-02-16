import React from 'react';
import { Checkbox } from './common/Checkbox';

export const Tasks = () => {
  const tasks = [];
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="tab-name">Cooking</h2>
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