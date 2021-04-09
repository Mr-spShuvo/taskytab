import { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import { db } from '../firebase';
import { ARCHIVED_TAB, getDocsWithId, INBOX_TAB, TODAY_TAB, WEEK_TAB } from '../utils';

import { SelectedTabContext } from '../contexts';

/**
 * Custom hooks to retrieves the list of Tasks based on selected tab from server
 * @param {string} selectedTabId - Currently selected tab (E.g. 'INBOX', 'WEEK' or Others)
 * @param {string} userId - Id of currently logged in user
 * @returns {object} A object of tasks and archived tasks
 */

export const useTasks = (userId = 'xlipTsb3Pd33p0kmqXSN') => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [selectedTab] = useContext(SelectedTabContext);

  useEffect(() => {
    // Initiate Query on `tasks` collections
    let query = db.collection('tasks');
    query = query.where('userId', '==', userId);

    // TODO: Check with Date - it's not working currently
    if (selectedTab.id === INBOX_TAB.id) query = query.where('tabId', '==', INBOX_TAB.id);
    else if (selectedTab.id === TODAY_TAB.id) query = query.where('date', '==', moment().format('MM/DD/YYYY'));
    else if (selectedTab.id === WEEK_TAB.id) query = query.where('date', '<=', moment().add(6, 'days').format());
    else if (selectedTab.id == ARCHIVED_TAB.id) query = query.where('archived', '==', true);
    else query = query.where('tabId', '==', selectedTab.id);

    const unsubscribe = query.onSnapshot(snapshot => {
      // Retrieving list of tasks depend on selected tab
      const tasks = snapshot.docs.map(getDocsWithId);

      if (selectedTab.id === ARCHIVED_TAB.id) return setTasks(tasks);

      // Checking Whether the tasks is archived or regular
      const archivedTasks = tasks.filter(task => task.archived === true);
      const regularTasks = tasks.filter(task => task.archived === false);

      // Updating States
      setTasks(regularTasks);
      setArchivedTasks(archivedTasks);
    });

    return () => unsubscribe();
  }, [selectedTab, userId]);

  return { tasks, archivedTasks };
};
