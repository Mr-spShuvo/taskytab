import { collatedTasks } from '../constants';

export const isCollatedTasksExists = selectedTab => {
  collatedTasks.find(task => task.tabId === selectedTab);
};

export const getDocsWithId = doc => ({ id: doc.id, ...doc.data() });
