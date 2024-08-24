/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { TaskInterface } from '../../types/tasksApp.interface';
import Item from '../Item/Item';
import Search from '../Search/Search';
import { StyledList } from './Style';
import { searchValuesInterface } from '../../types/tasksApp.interface';

const List = ({ tasks, setTasks, setCancelDel }: { tasks: TaskInterface[], setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>, setCancelDel: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const [searchValues, setSearchValues] = useState({ searchValue: "", newestFirst: true, onlyCompleted: false } as searchValuesInterface)

  // Функция для фильтрации и сортировки задач
  const sortedList = (() => {
    const { searchValue, newestFirst, onlyCompleted } = searchValues;

    return tasks
      .filter((task) => {
        if (onlyCompleted && !task.completed) {
          return false;
        }
        if (searchValue && !task.title.includes(searchValue)) {
          return false;
        }
        return true;
      })
      .sort((a, b) => newestFirst ? b.id - a.id : a.id - b.id);
  })()


  return (
    <div className="container">
      <Search sortedList={sortedList} searchValues={searchValues} setSearchValues={setSearchValues} />

      <StyledList>
        {sortedList.map((task) => (
          <Item key={task.id} task={task} tasks={tasks} setTasks={setTasks} setCancelDel={setCancelDel}>
          </Item>
        ))}
      </StyledList>
    </div>
  )
}

export default List