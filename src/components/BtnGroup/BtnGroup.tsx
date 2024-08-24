import { BtnGroupStyled } from './Style';

const BtnGroup = ({ children }: { children?: React.ReactNode }) => {

  return (
    <BtnGroupStyled>
      {children}
    </BtnGroupStyled>
  )
}

export default BtnGroup