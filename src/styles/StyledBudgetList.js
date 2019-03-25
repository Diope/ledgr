import styled from 'styled-components'

export const MobileView = styled.div`
  @media(min-width: 40rem) {
    display: none;

  }
`

export const DesktopView = styled.div`
  @media(max-width: 40rem - .02rem) {
    display: none;
  }
`

export const ListHeading = styled.div`
  background: #f8f8f8;
  color: #757575;
  border: 1px solid #e4e4e4;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 1.8rem;
`