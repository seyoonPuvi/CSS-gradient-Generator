// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
    min-height:100vh;
    background-image:linear-gradient(
        to ${props => props.direction}, 
        ${props => props.colorOne},
        ${props => props.colorTwo});
    display:flex;
    justify-content:center;
    align-items:center;

`

export const MainContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    row-gap:2rem;

    @media (max-width:700px) {
      width:90%;
    }
`

export const Heading = styled.h1`
    color:white;
    font-weight:bold;
    font-size:3rem;
    text-align:center;
    
    @media (max-width:700px) {
     font-size:2rem;
    }
`

export const SubHeading = styled.p`
    color:white;
    text-align:center;
    font-size:2rem;
    @media (max-width:700px) {
     font-size:1.6rem;
    }
`

export const ButtonListContainer = styled.ul`
    padding-inline-start:0;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ColorInputMainContainer = styled.div`
    width:50%;
    display:flex;
   justify-content:space-between;
   
    @media (max-width:700px) {
      width:80%;
    }
`

export const ColorInputContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const ColorDescription = styled.p`
  color:white;
  font-weight:bold;
  text-align:center;
  font-size:18px;
    @media (max-width:700px) {
     font-size:1.6rem;
    }
`

export const Input = styled.input`
  height:5rem;
  width:10rem;
  outline: none;
  border: none;
  cursor: pointer;
  background:transparent;
  
`

export const Button = styled.button`
  background-color: steelblue;
  color: darkblue;
  border-radius: 5px;
  padding: 1rem 2rem; /* Smaller padding to look more like a button */
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4682b4; /* Slightly lighter blue on hover */
  }
`
