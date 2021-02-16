import { useEffect, useState } from 'react';
import moment from 'moment';

import { db } from '../firebase';
import { isCollatedTasksExists, getDocsWithId } from '../utils';

/**
 * Custom hooks to retrieves the list of Tasks based on selected tab from server
 * @param {string} selectedTab - Current selected tab (E.g. Inbox, Week or Custom)
 * @param {string} userId - Id of current logged in user
 * @returns {object} A object of tasks and archived tasks
 */
export const useTasks = (selectedTab, userId = 'xlipTsb3Pd33p0kmqXSN') => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const query = db.collection('tasks').where('userId', '==', userId);
    if (!query) return;

    let unsubscribe;
    if (selectedTab && !isCollatedTasksExists(selectedTab)) unsubscribe = query.where('tabId', '==', selectedTab);
    else {
      if (selectedTab === 'TODAY') unsubscribe = query.where('date', '==', moment().format('DD/MM/YYYY'));
      else if (selectedTab === 'INBOX' || selectedTab === 0) unsubscribe = query.where('date', '==', '');
      // default is (selectedTab === 'WEEK') -> no need to filter
    }

    unsubscribe = query.onSnapshot(snapshot => {
      const tasks = snapshot.docs.map(getDocsWithId);

      const regularTasks = tasks.filter(task => task.archived === false);
      const archivedTasks = tasks.filter(task => task.archived === true);
      const weeklyTasks = tasks.filter(task => moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 && !task.archived);

      if (selectedTab === 'WEEK') setTasks(weeklyTasks);
      else setTasks(regularTasks);
      setArchivedTasks(archivedTasks);
    });

    return () => unsubscribe();
  }, [selectedTab, userId]);

  return { tasks, archivedTasks };
};
