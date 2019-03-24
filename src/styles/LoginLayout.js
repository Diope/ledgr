import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  background-color: #EAEAEA;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

export const LayoutBox = styled.div`
  background: #ffffff;
  border-radius: 2px;
  text-align: center;
  width: 45rem;
  padding: 10px 0 30px 0;

  h1 {
    font-size: 3rem;
  }
`

export const GoogleButton = styled.button`
  background: #E8453C;
  padding: 10px 0 10px 0;
  margin-bottom: 10px;
  width: 60%;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 300;
  border: none;
`

export const TwitterButton = styled.button`
  background: #29A3EF;
  padding: 10px 0 10px 0;
  width: 60%;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 300;
  border: none;
`
