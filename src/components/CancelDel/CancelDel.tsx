import { TaskInterface } from '../../types/tasksApp.interface';
import { CancelDelBtn } from './Style';

const CancelDel = ({ cancelDel, setTasks, setCancelDel }: { cancelDel: boolean, setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>, setCancelDel: React.Dispatch<React.SetStateAction<boolean>> }) => {

  function cancelDeleteTask() {
    const prev_val = localStorage.getItem("prev_val")
    if (prev_val) { setTasks(JSON.parse(prev_val)) }
    setCancelDel(false)
  }
  return (
    <>
      {cancelDel &&
        <CancelDelBtn type="button" onClick={cancelDeleteTask}>
          Cancel
        </CancelDelBtn>}
    </>
  )
}

export default CancelDel