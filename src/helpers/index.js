import { collatedTasks } from '../constants';

//Checking If Selected tab is the CollatedTask
export const collatedTasksExists = selectedTab => {
  collatedTasks.find(task => task.key === selectedTab);
};
