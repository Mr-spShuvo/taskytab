import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { db } from '../firebase';
import { getDocsWithId } from '../utils';
import { SelectedTabContext, TabsContext } from '../contexts';

/**
 * Custom hooks to retrieves the list of Tasks based on selected tab from server
 * @param {string} userId - Id of currently logged in user
 * @returns {object} A object of tasks[] and archivedTasks[]
 */

export const useTasks = (userId = 'xlipTsb3Pd33p0kmqXSN') => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [tabs, collatedTabs] = useContext(TabsContext);
  const [selectedTab] = useContext(SelectedTabContext);
  const [INBOX_TAB, TODAY_TAB, WEEK_TAB, ARCHIVED_TAB] = collatedTabs;

  useEffect(() => {
    // Initiate Query on `tasks` collections
    let query = db.collection('tasks');
    query = query.where('userId', '==', userId);

    // Queries
    const startAt = new Date(dayjs().startOf('day').valueOf());
    if (selectedTab.id === INBOX_TAB?.id)
      query = query.where('tabId', '==', INBOX_TAB.id);
    else if (selectedTab.id === TODAY_TAB?.id) {
      const endAt = new Date(dayjs().endOf('day').valueOf());
      query = query.orderBy('date').startAt(startAt).endAt(endAt);
    } else if (selectedTab.id === WEEK_TAB?.id) {
      const endAt = new Date(dayjs().endOf('day').add('6', 'days').valueOf());
      query = query.orderBy('date').startAt(startAt).endAt(endAt);
    } else if (selectedTab.id === ARCHIVED_TAB?.id)
      query = query.where('archived', '==', true);
    else query = query.where('tabId', '==', selectedTab.id);

    const unsubscribe = query.onSnapshot(snapshot => {
      // Retrieving list of tasks depend on selected tab
      const tasks = snapshot.docs.map(getDocsWithId);

      if (selectedTab.id === ARCHIVED_TAB?.id) return setTasks(tasks);

      // Checking Whether the tasks is archived or regular
      const archivedTasks = tasks.filter(task => task.archived === true);
      const regularTasks = tasks.filter(task => task.archived === false);

      // Updating States
      setTasks(regularTasks);
      setArchivedTasks(archivedTasks);
    });

    return () => unsubscribe();
  }, [
    selectedTab,
    userId,
    TODAY_TAB.id,
    INBOX_TAB.id,
    WEEK_TAB.id,
    ARCHIVED_TAB.id,
    collatedTabs,
    tabs
  ]);

  return { tasks, archivedTasks };
};
