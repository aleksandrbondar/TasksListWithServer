/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { TaskInterface } from '../../types/tasksApp.interface';
import Btn from '../Btn/Btn';
import BtnGroup from '../BtnGroup/BtnGroup';
import Checkbox from '../Checkbox/Checkbox';
import ItemParams from '../ItemParams/ItemParams';
import { Task, TaskTitle, TaskInput, TaskTitleWrapper, TaskWrapper } from './Style';

const Item = ({ task, tasks, setTasks, setCancelDel }: { task: TaskInterface, setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>, tasks: TaskInterface[], setCancelDel: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  // DELETE TASK
  const hideTask = (id: number) => {
    saveLastTasks();
    setTasks(tasks.filter((task) => task.id !== id));
    setCancelDel(true);
    setTimeout(() => {
      setCancelDel(false);
      localStorage.removeItem("prev_val");
    }, 5000);
  };

  //SAVE LAST TASKS
  function saveLastTasks() {
    localStorage.setItem("prev_val", JSON.stringify(tasks))
  }

  // COMPLETE TASK
  function completeTask(id: number) {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  // EDIT TASK
  function editTask() {
    setIsEditing(true);
  }

  // SAVE TASK
  function saveTask(id: number) {
    if (editValue.length === 0) hideTask(id)
    if (editValue !== task.title && editValue.length > 0) {
      setTasks(tasks.map((task) => task.id === id ? { ...task, title: editValue, completed: false, id: Date.now() } : task).sort((a, b) => b.id - a.id));
      setIsEditing(false);
    } else setIsEditing(false)
  }

  // HANDLE KEYDOWN
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, id: number) {
    if (e.key === 'Enter') saveTask(id);
    if (e.key === 'Escape') setIsEditing(false);
  }

  return (
    <TaskWrapper data-id={task.id}>
      <Task style={task.completed ? { backgroundColor: "rgba(0, 255, 0, 0.2)" } : {}}>
        <TaskTitleWrapper>
          {isEditing ? (
            <TaskInput
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={() => saveTask(task.id)}
              onKeyDown={(e) => handleKeyDown(e, task.id)}
              autoFocus
            />
          ) : (
            <TaskTitle>{task.title}</TaskTitle>
          )}
        </TaskTitleWrapper>

        <BtnGroup>
          <Checkbox type="taskInput" id={task.id} checked={task.completed} onClick={() => completeTask(task.id)}>Completed: </Checkbox>
          {isEditing ? (
            <Btn type="save" onClick={() => saveTask(task.id)}>Save</Btn>
          ) : (
            <Btn type="edit" onClick={() => editTask()}>Edit</Btn>
          )}
          <Btn type="reset" onClick={() => hideTask(task.id)}>Delete</Btn>
        </BtnGroup>

        <ItemParams id={task.id} />

      </Task>
    </TaskWrapper >
  )
}

export default Item;