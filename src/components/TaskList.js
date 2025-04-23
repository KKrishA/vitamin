import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}
        >
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(task.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
