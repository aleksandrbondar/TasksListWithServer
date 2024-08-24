import { StyledBtnCheckbox, CheckboxWrapper, ChildWrapper } from './Style';
import { ChangeEvent, FormEvent } from 'react';

const Btn = ({ type, id, children, checked, onClick, onChange }: { type?: string, id?: string | number, children?: React.ReactNode, checked?: boolean, onClick?: (e: FormEvent<HTMLInputElement>) => void, onChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const inputId = typeof id === "number" ? id.toString() : id;

  return (
    <CheckboxWrapper checkboxType={type}>
      <ChildWrapper htmlFor={inputId}>{children}</ChildWrapper>
      <StyledBtnCheckbox checkboxType={type} id={inputId} onClick={onClick} onChange={onChange} type="checkbox" defaultChecked={checked} />
    </CheckboxWrapper >
  )
}

export default Btn