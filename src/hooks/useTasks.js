import { useEffect, useState } from 'react';
import moment from 'moment';

import { db } from '../firebase';
import { isCollatedTab, getDocsWithId } from '../utils'; // eslint-disable-line

/**
 * Custom hooks to retrieves the list of Tasks based on selected tab from server
 * @param {string} selectedTabId - Current selected tab (E.g. 'INBOX', 'WEEK' or Custom)
 * @param {string} userId - Id of current logged in user
 * @returns {object} A object of tasks and archived tasks
 */

export const useTasks = (selectedTabId, userId = 'xlipTsb3Pd33p0kmqXSN') => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    // Initiate Query on `tasks` collections
    let query = db.collection('tasks').where('userId', '==', userId);
    if (!query) return;
    // if (selectedTabId && !isCollatedTab(selectedTabId)) unsubscribe = query.where('tabId', '==', selectedTabId);
    // else {
    //   if (selectedTabId === 'TODAY') unsubscribe = query.where('date', '==', moment().format('DD/MM/YYYY'));
    //   else if (selectedTabId === 'INBOX' || selectedTabId === 0) unsubscribe = query.where('date', '==', '');
    //   /* default is (selectedTabId === 'WEEK') -> no need to filter */
    // }
    //const weeklyTasks = tasks.filter(task => moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 && !task.archived);
    //if (selectedTabId === 'WEEK') setTasks(weeklyTasks);
    // TODO: Check with Date - it's not working currently
    if (selectedTabId === 'INBOX') query = query.where('tabId', '==', '0');
    else if (selectedTabId === 'TODAY') query = query.where('date', '==', moment().format('MM/DD/YYYY'));
    else if (selectedTabId === 'WEEK') {
      query = query.where('date', '<=', moment().add(6, 'days').format());
    } else query = query.where('tabId', '==', selectedTabId);

    const unsubscribe = query.onSnapshot(snapshot => {
      // Retrieving list of tasks depend on selected tab
      const tasks = snapshot.docs.map(getDocsWithId);

      // Checking Whether the tasks is archived or regular
      const archivedTasks = tasks.filter(task => task.archived === true);
      const regularTasks = tasks.filter(task => task.archived === false);

      // Updating States
      setTasks(regularTasks);
      setArchivedTasks(archivedTasks);
    });

    return () => unsubscribe();
  }, [selectedTabId, userId]);

  return { tasks, archivedTasks };
};
