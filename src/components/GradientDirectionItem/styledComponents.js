// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
    padding:1rem 2rem;
    border:none;
    outline:none;
    border-radius:1rem;
    background-color:white;
    opacity:${props => (props.activeDirectionValue ? 1 : 0.5)};

    @media (max-width:700px) {
    padding:1rem 1.5rem;
    }

`

export const List = styled.li`
    list-style-type:none;
    margin:1rem 1rem;
`
