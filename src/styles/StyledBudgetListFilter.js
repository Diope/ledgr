import styled from 'styled-components'

export const InputGroup = styled.div`
  display:flex;
  margin-bottom: 2.2rem;
  flex-direction: column;

  @media (min-width: 48rem) {
    margin-bottom: 2.2rem;
    flex-direction: row;
  }

`

export const InputGroupItem = styled.div`
  margin-bottom: 1.6rem;

  @media (min-width: 48rem) {
    margin-right: 1.6rem;
    margin: 0 1.6rem 0 0;

  }
`