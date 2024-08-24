import { ItemParamsStyled } from "./Style"


const ItemParams = ({ id }: { id: number }) => {
  function timeAgo() {
    const difference = +new Date() - id

    if (difference < 60 * 60 * 1000) {
      return `${Math.floor(difference / 1000 / 60)} minutes`
    }

    if (difference < 60 * 60 * 24 * 1000) {
      return `${Math.floor(difference / 1000 / 60 / 60)} hours`
    }

    if (difference < 60 * 60 * 24 * 30 * 1000) {
      return `${Math.floor(difference / 1000 / 60 / 60 / 24)} days`
    }

  }
  return (
    <ItemParamsStyled>
      <p>Created {timeAgo()} ago.</p>
      <p>ID: {id}</p>
    </ItemParamsStyled>
  )
}

export default ItemParams