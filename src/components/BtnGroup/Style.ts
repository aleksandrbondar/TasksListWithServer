import styled from 'styled-components';

export const BtnGroupStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  & > * {
    border-radius: 10px;
  }

  @media (min-width: 992px) {
  flex-direction: row;
    gap: 25px;
    & > * {
      flex: 1 1 0;

    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 10px;
    & > * {

  }
}
`

