import styled from 'styled-components'

export const Un = styled.ul`
  list-style-type: none;
  display: flex;
`
export const Li = styled.li`
  margin: 15px;
`
export const Image = styled.img`
  width: 400px;
  height: 400px;
`
export const DivCen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  color: ${props => (props.color ? 'black' : 'red')};
`
