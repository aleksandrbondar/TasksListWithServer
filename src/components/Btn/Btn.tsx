import { BtnEventType } from '../../types/tasksApp.interface';
import { StyledBtnSubmit, StyledBtnClear, StyledBtnEdit } from './Style';

const Btn = ({ children, type, onClick }: { children?: React.ReactNode, type?: string, onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => {

  function handleClick(e: BtnEventType) {
    e.preventDefault()
    if (onClick) {
      onClick(e);
    }
  }

  const typeBtn: { [key: string]: JSX.Element } = {
    "submit": <StyledBtnSubmit typeof={type} onClick={handleClick}>{children}</StyledBtnSubmit>,
    "reset": <StyledBtnClear typeof={type} onClick={handleClick}>{children}</StyledBtnClear>,
    "edit": <StyledBtnEdit typeof={"submit"} onClick={handleClick}>{children}</StyledBtnEdit>,
    "save": <StyledBtnSubmit typeof={"submit"} onClick={handleClick}>{children}</StyledBtnSubmit>,
  }

  return (
    <>
      {typeBtn[type as keyof typeof typeBtn]}
    </>
  )
}

export default Btn