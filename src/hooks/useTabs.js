import { useEffect, useState } from 'react';

import { db } from '../firebase';
import { getDocsWithId } from '../utils';

/**
 * Custom hooks to retrieves the list of Tabs from server
 * @param {string} userId - Id of current logged in user
 * @returns {array} A array of tabs and updater function for tabs
 */

export const useTabs = (userId = 'xlipTsb3Pd33p0kmqXSN') => {
  const [tabs, setTabs] = useState([]);
  const [inboxTab, setInboxTab] = useState({});

  useEffect(() => {
    const query = db.collection('tabs').where('userId', '==', userId);
    const unsubscribe = query.onSnapshot(snapshot => {
      const allTabs = snapshot.docs.map(getDocsWithId);
      const tabs = allTabs.filter(tab => tab.name !== 'Inbox');
      setTabs(tabs);
      const [inbox] = allTabs.filter(tab => tab.name === 'Inbox');
      setInboxTab(inbox);
    });
    return () => unsubscribe();
  }, [userId]);

  return [tabs, inboxTab];
};
