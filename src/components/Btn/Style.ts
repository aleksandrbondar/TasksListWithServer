import styled from 'styled-components';

const btn = `
  width: 100%;
  padding: 10px 40px;
  border: none;
  font-size: 24px;
  transition: 0.5s;
  @media (max-width: 992px) {
    padding: 10px 20px;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const StyledBtnSubmit = styled.button`
  ${btn}
  background-color: rgba(0, 255, 0, 0.2);
  &:hover {
  background-color: rgba(0, 255, 0, 1);
  }
`

export const StyledBtnClear = styled.button`
  ${btn}
  background-color: rgba(255, 0, 0, 0.2);
  &:hover {
  background-color: rgba(255, 0, 0, 1);
  }
`

export const StyledBtnEdit = styled.button`
  ${btn}
  background-color: rgba(255, 255, 0, 0.2);
  &:hover {
  background-color: rgba(255, 255, 0, 1);
  }
`