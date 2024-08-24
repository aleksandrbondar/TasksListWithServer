import { StyledInput } from './Style';
import { FormEvent } from 'react';

const Input = ({ type, placeholder, value, onChange, children }: { type?: string, placeholder?: string, value?: string, onChange: (e: FormEvent<HTMLInputElement>) => void, children?: React.ReactNode }) => {

  return (
    <>
      <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {children}
    </>
  )
}

export default Input