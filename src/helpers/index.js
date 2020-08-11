import { collatedTasks } from '../constants';

export const collatedTasksExists = selectedTab => {
  collatedTasks.find(task => task.key === selectedTab);
};
