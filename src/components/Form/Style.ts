import styled from 'styled-components';

export const StyledForm = styled.form`
display: block;
position: relative;
transition: 0.5s;
opacity: 0.6;
&:focus,
&:hover,
&:focus-within {
scale: 1.05;
}
&:focus>div,
&:hover>div,
&:focus-within>div {
  opacity: 1;
};
`


export const BtnWrapper = styled.div`
  position: absolute;
  height: calc(100% - 6px);
  top: 3px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  border-radius: 0 50px 50px 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
  :first-child {
  border-right: 1px solid black;
  };
  & > * {
    height: 100%;
  }
`