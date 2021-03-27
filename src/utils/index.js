import { collatedTabs } from '../config';

/**
 * Check whether the selected tab has an id of `INBOX`, `TODAY` or `WEEK` and return the collatedTab object as {tabId, name} or undefined
 * @param {string} userId - Id of current logged in user
 * @returns {object} A object of {collated task}
 */
export const isCollatedTab = selectedTabId => collatedTabs.find(({ tabId }) => tabId === selectedTabId);

//
export const getDocsWithId = doc => ({ id: doc.id, ...doc.data() });
