import styled from 'styled-components'

export const ButtonItemContainer = styled.li`
  list-style-type: none;
`
export const Image = styled.img`
  width: 130px;

  @media screen and (min-width: 768px) {
    width: 160px;
    margin-right: 15px;
  }
`

export const ImageButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
