import styled from 'styled-components';

export const HeaderStyle = styled.header`
  top: 0;
  left: 0;
  background-color: #3C3C3C;

  .title {
    color: #ffffff;
    font-size: 1.6rem;
    text-decoration: none;

    h1 {
      margin: 0;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 0;
`

export const LogOutButton = styled.button`
  background-color: #3C3C3C;
  font-size: 1.5rem;
  border: none;
  color: #fff;
  padding: 7px 0;
  width: 12.5rem;
`