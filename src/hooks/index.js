import { useEffect, useState } from 'react';
import moment from 'moment';

import { db } from '../firebase';
import { collatedTasksExists } from '../helpers';

/**
 * @name useTasks
 *  - Custom hook to return all tasks for Generic Tabs and Tabs
 * @param selectedTab
 * @returns {tasks, archivedTasks}
 */
export const useTasks = selectedTab => {
  const [tasks, setTasks] = useState([]);
  const [archiveTasks, setArchiveTasks] = useState([]);

  //console.log(selectedTab);
  useEffect(() => {
    // Set filter on firebase User Data
    let unsubscribe = db.collection('tasks').where('userId', '==', 'xlipTsb3Pd33p0kmqXSN');

    // Check on if any Tab Selected and if there is any tasks on the Tab
    if (selectedTab && !collatedTasksExists(selectedTab)) {
      // Match up Tabs on the firestore
      unsubscribe = unsubscribe.where('tabId', '==', selectedTab);
    } else {
      // If any tab is not selected, Select Generic Tab
      if (selectedTab === 'TODAY') {
        unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY'));
      } else if (selectedTab === 'INBOX' || selectedTab === 0) {
        unsubscribe = unsubscribe.where('date', '==', '');
      }
      // if selectedTab === 'WEEK', we don't have to filter for any data
    }

    // Retrieving Query Data from firestore
    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      // Update task List if the tab is WEEK
      if (selectedTab === 'WEEK') {
        setTasks(
          newTasks.filter(task => {
            // Checking Tasks Date Less than 7 days and Tasks are not archived.
            return moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 && task.archive !== true;
          })
        );
      } else setTasks(newTasks.filter(task => task.archive !== true));

      // Update archiveTask List
      setArchiveTasks(newTasks.filter(task => task.archive !== false));
    });
    return () => unsubscribe();
  }, [selectedTab]);

  return { tasks, archiveTasks };
};

/**
 * @name useTabs
 *  - Custom hook to return all the Tabs List
 * @param ()
 * @returns {tabs, setTabs}
 */
export const useTabs = () => {
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    // Retrieve Tab list and data
    db.collection('tabs')
      .where('userID', '==', 'xlipTsb3Pd33p0kmqXSN')
      .orderBy('tabId')
      .get()
      .then(snapshot => {
        const allTabs = snapshot.docs.map(tab => ({
          id: tab.id,
          ...tab.data()
        }));
        // Checking if it already retrieve the data (Prevents infinite Loops)
        if (JSON.stringify(allTabs) !== JSON.stringify(tabs)) setTabs(allTabs);
      });
  }, [tabs]);

  return { tabs, setTabs };
};
