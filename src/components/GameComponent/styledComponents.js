import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 44px;
  @media screen and (min-width: 1024px) {
    height: 120vh;
  }
`
export const NamesAndScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  width: 80%;
`
export const NamesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`
export const NameListItem = styled.li`
  list-style-type: none;
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 21px;
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  font-weight: 500;
  color: #223a5f;
  font-size: 22px;
  margin: 0px;
`
export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  font-size: 35px;
  margin: 0px;
`
export const GameViewListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  width: 300px;
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-right: 30px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-right: 90px;
  }
`

export const TriggerButton = styled.button`
  border-width: 0px;
  background-color: #ffffff;
  border-radius: 7px;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 458px;
`
export const RulesImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  margin: 0px;
  margin-top: 10px;
  background-color: #f8f8f8;
`
export const ResultsViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const YouAndOpponentNameDisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 240px;
  margin-top: 90px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const DescText = styled.p`
  font-family: 'Roboto';
  font-size: 21px;
  font-weight: 500;
  color: #ffffff;
`
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`
export const Images = styled.img`
  width: 130px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const Result = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0px;
  margin-bottom: 10px;
`

export const PlayAgainButton = styled.button`
  font-family: 'Bree Serif';
  font-weight: 500;
  background-color: #ffffff;
  border-width: 0px;
  color: #223a5f;
  border-radius: 7px;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 11px;
  cursor: pointer;
  outline: none;
  padding-bottom: 11px;
`
