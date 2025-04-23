import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

function TaskForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add a new task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
