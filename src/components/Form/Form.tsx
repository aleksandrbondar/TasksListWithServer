import { TaskInterface } from '../../types/tasksApp.interface';
import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import { StyledForm, BtnWrapper } from './Style';
import { FormEvent, useEffect, useState } from 'react';

const Form = ({ children, tasks, setTasks }: { children?: React.ReactNode, tasks: TaskInterface[], setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>> }) => {
  // CURRENT TASK
  const [currectTask, setCurrectTask] = useState(localStorage.getItem("currectTask") ?? "")
  useEffect(() => { localStorage.setItem("currectTask", currectTask) }, [currectTask])

  // SUBMIT CURRENT TASK
  function submit() {
    if (currectTask) {
      const values = tasks.map((task) => task.title)
      if (values.includes(currectTask)) {
        alert("Task already exists")
      } else {
        setTasks([{ id: Date.now(), title: currectTask.trim(), completed: false }, ...tasks])
        setCurrectTask("")
      }
    }
  }

  // RESET CURRENT TASK
  function reset() {
    setCurrectTask("")
  }
  return (
    <div className="container">
      <StyledForm>
        <Input type="text" placeholder="Type here" value={currectTask} onChange={(e: FormEvent<HTMLInputElement>) => setCurrectTask(e.currentTarget.value)} />
        <BtnWrapper>
          <Btn type="submit" onClick={submit}>Add</Btn>
          <Btn type="reset" onClick={reset}>Reset</Btn>
        </BtnWrapper>
        {children}
      </StyledForm>
    </div>
  )
}

export default Form