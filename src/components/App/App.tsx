/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import Form from "../Form/Form";
import { TasksApp } from "./Style";
import { TaskInterface } from "../../types/tasksApp.interface";
import List from "../List/List";
import Title from "../Title/Title";
import CancelDel from "../CancelDel/CancelDel";


const App = () => {
  // TASK LIST
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/getData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data: TaskInterface[] = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/postData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tasks),
        });
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
      } catch (error) {
        console.error("Ошибка при сохранении данных:", error);
      }
    };
    saveTasks();
  }, [tasks]);

  //CANCEL DELETE
  const [cancelDel, setCancelDel] = useState(false)

  return (
    <TasksApp>

      <Title>Task App</Title>

      <Form tasks={tasks} setTasks={setTasks} />

      <List tasks={tasks} setTasks={setTasks} setCancelDel={setCancelDel} />

      <CancelDel setTasks={setTasks} cancelDel={cancelDel} setCancelDel={setCancelDel} />
    </TasksApp >
  );
};

export default App
