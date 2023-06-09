import {ButtonItemContainer, Image, ImageButton} from './styledComponents'

let dataAttributeValue

const ButtonItem = props => {
  const {buttonDetails, onClickGameComponents} = props
  const {id, imageUrl} = buttonDetails
  if (id === 'ROCK') {
    dataAttributeValue = 'rockButton'
  } else if (id === 'SCISSORS') {
    dataAttributeValue = 'scissorsButton'
  } else {
    dataAttributeValue = 'paperButton'
  }

  const onClickImage = () => {
    onClickGameComponents(id)
  }

  return (
    <ButtonItemContainer>
      <ImageButton type="button"  onClick={onClickImage}
      data-testid={dataAttributeValue}>
        <Image src={imageUrl} alt={id} />
      </ImageButton>
    </ButtonItemContainer>
  )
}

export default ButtonItem
