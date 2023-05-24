import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  GameContainer,
  NamesAndScoreContainer,
  NamesContainer,
  NameListItem,
  ScoreContainer,
  ScoreText,
  ScoreValue,
  GameViewListContainer,
  PopupContainer,
  CloseButton,
  TriggerButton,
  ModalContainer,
  RulesImage,
  ResultsViewContainer,
  YouAndOpponentNameDisplayContainer,
  DescText,
  Images,
  Result,
  ImagesContainer,
  PlayAgainButton,
} from './styledComponents'

import ButtonItem from '../ButtonItem'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameComponent extends Component {
  state = {
    score: 0,
    meSelectedImage: '',
    opponentSelectedImage: '',
    result: '',
    onShowGameResults: false,
  }

  onClickGameComponents = selectedId => {
    const filterSelectedId = choicesList.filter(
      eachItem => eachItem.id === selectedId,
    )
    this.setState({meSelectedImage: filterSelectedId[0].imageUrl})

    const generateRandomNumber = Math.random() * 3

    const opponentSelectedId = Math.floor(generateRandomNumber)
    this.setState({
      opponentSelectedImage: choicesList[opponentSelectedId].imageUrl,
    })

    const opponentChoice = choicesList[opponentSelectedId].id

    if (selectedId === 'PAPER' && opponentChoice === 'ROCK') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (selectedId === 'SCISSORS' && opponentChoice === 'ROCK') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (selectedId === 'ROCK' && opponentChoice === 'PAPER') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (selectedId === 'SCISSORS' && opponentChoice === 'PAPER') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (selectedId === 'ROCK' && opponentChoice === 'SCISSORS') {
      this.setState({result: 'YOU WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (selectedId === 'PAPER' && opponentChoice === 'SCISSORS') {
      this.setState({result: 'YOU LOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState({result: 'IT IS DRAW'})
    }
    this.setState({onShowGameResults: true})
  }

  onClickPlayAgain = () => {
    this.setState({
      onShowGameResults: false,
      meSelectedImage: '',
      opponentSelectedImage: '',
      result: '',
    })
  }

  render() {
    const {
      score,
      meSelectedImage,
      opponentSelectedImage,
      result,
      onShowGameResults,
    } = this.state

    return (
      <GameContainer>
        <NamesAndScoreContainer>
          <NamesContainer>
            <NameListItem>ROCK</NameListItem>
            <NameListItem>PAPER</NameListItem>
            <NameListItem>SCISSORS</NameListItem>
          </NamesContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </NamesAndScoreContainer>
        {onShowGameResults ? (
          <ResultsViewContainer>
            <YouAndOpponentNameDisplayContainer>
              <DescText>YOU</DescText>
              <DescText>OPPONENT</DescText>
            </YouAndOpponentNameDisplayContainer>
            <ImagesContainer>
              <Images src={meSelectedImage} alt="your choice" />
              <Images src={opponentSelectedImage} alt="opponent choice" />
            </ImagesContainer>
            <Result>{result}</Result>
            <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultsViewContainer>
        ) : (
          <GameViewListContainer>
            {choicesList.map(eachItem => (
              <ButtonItem
                key={eachItem.id}
                buttonDetails={eachItem}
                onClickGameComponents={this.onClickGameComponents}
              />
            ))}
          </GameViewListContainer>
        )}
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">RULES</TriggerButton>}
            className="popup-content"
          >
            {close => (
              <>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine size="20" color="#223a5f" />
                </CloseButton>
                <ModalContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              </>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}

export default GameComponent
