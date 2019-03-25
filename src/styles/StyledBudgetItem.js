import styled from 'styled-components';


export const ListItem = styled.div`
  .listItem {
    color: #323232;
    border: 1px solid #e4e4e4;
    border-top: none;
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    text-decoration: none;
    transition: background .5s ease;
    &:hover {
      background: #f8f8f8;
    }
    @media (min-width: 40rem) {
      flex-direction: row;
      justify-content: space-between;
      padding: 2.0rem;
    }
  }

  .no-item-message {
    align-items: center;
    font-size: 1.6rem;
    font-size: 300;
    justify-content: center;
    color: #757575;
    padding: 1.8rem;
    &:hover {
      background: none;
    }
  }

  .no-item-link {
    text-decoration: none;
    color: #179BB5;
  }

  .listItem__Title {
    font-size: 1.8rem;
    font-weight: 700;
    word-break: break-all;
  }

  .listItem__span-title {
    font-size: 1.4rem;
    color: #757575;
  }

  .listItem__amount {
      margin: 1.6rem 0 0 0;
      font-size: 1.8rem;
      font-weight: 600;
      @media (min-width: 40rem) {
        margin: 0;
        padding-left: 1.4rem;
      }
  }
`

export const ListItemTitle = styled.div`
  
`

export const ListItemSpanTitle = styled.div`
  
`

export const ListItemAmount = styled.div`
  
`