import React from 'react';
import { MdEvent, MdEventNote, MdInbox, MdArchive, MdAdd, MdChevronRight, MdLabel, MdExpandMore } from 'react-icons/md';
import CollatedTab from './common/CollatedTab';
import SidebarDivider from './SidebarDivider';

import { Tabs } from './Tabs';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <CollatedTab name="Inbox" icon={<MdInbox />} />
        <CollatedTab name="Today" icon={<MdEvent />} />
        <CollatedTab name="This Week" icon={<MdEventNote />} />
        <CollatedTab name="Archived" icon={<MdArchive />} />
      </ul>
      <SidebarDivider />
      <Tabs />
    </div>
  );
};
