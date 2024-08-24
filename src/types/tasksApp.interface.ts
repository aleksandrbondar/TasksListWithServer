export interface TaskInterface {
  id: number
  title: string
  completed: boolean
}

export interface TaskListInterface {
  tasks: TaskInterface[]
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>
  currectTask: string
  setCurrectTask: React.Dispatch<React.SetStateAction<string>>
}

export interface BtnEventType extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
  preventDefault(): void;
}

export interface searchValuesInterface {
  searchValue: string
  newestFirst: boolean
  onlyCompleted: boolean
}
