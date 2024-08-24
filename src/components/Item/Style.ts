import styled from 'styled-components';
import { BtnGroupStyled as BtnGroup } from '../BtnGroup/Style';

export const Task = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 4px solid black;
  transition: 0.5s;
`;


export const TaskWrapper = styled.div`
  padding-block: 10px;
  transition: 0.5s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  &:focus-within {
    opacity: 1;
  }

  & > ${Task} > ${BtnGroup},
  & > ${Task} > ${BtnGroup} > * {
    transition: 0.5s;
    height: 0;
    opacity: 0;
    overflow: hidden;
  }

  &:hover > ${Task} > ${BtnGroup},
  &:focus-within > ${Task} > ${BtnGroup},
  &:focus > ${Task} > ${BtnGroup} {
    opacity: 1;
    @media (max-width: 992px) {
      height: 220px;
    }
    @media (min-width: 992px) {
      height: 60px;
  }
}

  &:hover > ${Task} > ${BtnGroup} > *,
  &:focus-within > ${Task} > ${BtnGroup} > *,
  &:focus > ${Task} > ${BtnGroup} > * {
    height: 60px;
    opacity: 1;
  }
`

export const TaskTitle = styled.h3`
  padding-bottom: 10px;
  display: block;
  font-size: 24px;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
  margin-bottom: 0;
`
export const TaskInput = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  background-color: transparent;
`


export const TaskTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
