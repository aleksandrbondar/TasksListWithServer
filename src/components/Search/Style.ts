import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 10px;
`

export const SearchResultMessage = styled.div`
width: 100%;
padding-block: 20px;
display: grid;
grid-template-columns: 1fr 340px;
@media (max-width: 992px) {
  grid-template-columns: 1fr;
  gap: 10px;
  justify-items: center;
}
`

export const MessageWrapper = styled.h3`
display: block;
justify-self: start;
@media (max-width: 992px) {
  justify-self: center;
}
`

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-content: center;
  gap: 10px;
`


export const FilterBtn = styled.button`
  width: 150px;
  border: 1px solid black;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.5s;
  &:hover {
    background-color: black;
    color: white;
    opacity: 1;
  }
`

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  opacity: 0.8;
  transition: 0.5s;

    &:focus,
  &:focus-visible,
  &:active,
  &:hover {
    opacity: 1;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 10px;
  }
    @media (min-width: 992px) {
    flex-direction: row;
    gap: 10px;
  }
`

export const SearchInput = styled.input`
  font-size: 24px;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  &::placeholder {
    color: black;
  }
`