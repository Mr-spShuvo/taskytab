import { MdEvent, MdEventNote, MdInbox, MdArchive } from 'react-icons/md';

export const INBOX_TAB = { id: '', name: 'Inbox', icon: MdInbox };
export const TODAY_TAB = { id: 'TODAY', name: 'Today', icon: MdEvent };
export const WEEK_TAB = { id: 'WEEK', name: 'This Week', icon: MdEventNote };
export const ARCHIVED_TAB = { id: 'ARCHIVED', name: 'Archived', icon: MdArchive };

/**
 * Check whether the selected tab has an id of `INBOX`, `TODAY` or `WEEK` and return the collatedTab object as {tabId, name} or undefined
 * @param {string} selectedTabId - Id of currently selected tab
 * @returns {object} An object of collated task
 */
// export const isCollatedTab = selectedTabId =>
//   collatedTabs.find(({ tabId }) => tabId === selectedTabId);
