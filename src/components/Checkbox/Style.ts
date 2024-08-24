import styled from 'styled-components';

export const CheckboxWrapper = styled.div <{ checkboxType?: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
  padding: 10px 40px;
  border: none;
  font-size: 24px;
  transition: 0.5s;
  ${props => props.checkboxType === "taskInput" && "background-color: rgba(0, 255, 0, 0.2);"}
  &:hover {
  ${props => props.checkboxType === "taskInput" && "background-color: rgba(0, 255, 0, 1);"}
  }
`

export const ChildWrapper = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 25px;
`

export const StyledBtnCheckbox = styled.input.attrs({ type: 'checkbox' }) <{ checkboxType?: string }>`
height: 40px;
width: 40px;
background-color: #eee;
border-radius: 50%;
border: none;
outline: none;
cursor: pointer;
${props => props.checkboxType === "taskInput" && "accent-color: rgba(0, 255, 0, 0.2);"}

&:checked {
  ${props => props.checkboxType === "taskInput" && "background-color: rgba(0, 255, 0, 1);"}
}
`