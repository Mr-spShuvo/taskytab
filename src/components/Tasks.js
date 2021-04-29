import React, { useContext, useState, useEffect } from 'react';

import { useTasks } from '../hooks';
import { SelectedTabContext } from '../contexts';
import { Task } from '../common';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { ARCHIVED_TAB } from '../utils';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import { Modal } from '../common/Modal';

export const Tasks = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showArchivedTasks, setShowArchivedTasks] = useState(false);
  const [selectedTab] = useContext(SelectedTabContext);
  const { tasks, archivedTasks } = useTasks();

  useEffect(() => {
    return () => {
      setShowArchivedTasks(false);
    };
  }, [selectedTab]);

  const handleShowArchivedTasks = () => {
    setShowArchivedTasks(!showArchivedTasks);
  };

  const handleAddTask = () => {
    setModalOpen(true);
  };

  return (
    <div className="tasks" data-testid="tasks">
      <div className="tasks__top">
        <h2 className="tasks__tab-name" data-testid="tab-name">
          {selectedTab?.name}
        </h2>
        {selectedTab?.id !== ARCHIVED_TAB.id && (
          <div className="tasks__top-actions">
            <button className="btn btn--neutral" onClick={handleAddTask}>
              <MdAdd /> Add Task
            </button>
            <Modal state={[isModalOpen, setModalOpen]}>ModalContent</Modal>
            <button className="btn">
              <MdMoreHoriz size={18} />
            </button>
          </div>
        )}
      </div>
      <ul className="tasks__list">
        {tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
      {!!archivedTasks.length && selectedTab?.id !== ARCHIVED_TAB.id && (
        <div className="tasks--archived">
          <button className="tasks--archived__tab-name" onClick={handleShowArchivedTasks}>
            <span className="tasks--archived__icon ">{showArchivedTasks ? <HiChevronDown /> : <HiChevronRight />}</span>
            <span className={`${!showArchivedTasks ? 'active' : ''}`}>Archived Tasks</span>
          </button>
          {showArchivedTasks && (
            <ul className="tasks__list">
              {archivedTasks.map(task => (
                <Task task={task} key={task.id} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
