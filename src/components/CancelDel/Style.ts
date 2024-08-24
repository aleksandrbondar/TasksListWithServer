import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;


export const CancelDelBtn = styled.button`
font-size: 24px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 200px;
  height: 50px;
  color: red;
  border: 4px solid red;
  background-color: transparent;
  border-radius: 10px;
  transition: 0.5s;
  animation: ${fadeInOut} 5s ease-in-out forwards;
    &:hover {
      background-color: red;
      color: black;
      opacity: 1;
      border-color: black;
    }
`
