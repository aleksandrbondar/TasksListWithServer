import { TitleStyled } from './Style';

const Title = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="container">
      <TitleStyled>
        {children}
      </TitleStyled>
    </div>
  )
}

export default Title