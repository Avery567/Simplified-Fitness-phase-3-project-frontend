import styled from "styled-components";

function Header () {
    return (
    <HeaderContainer>
        Simplified Fitness
        <NewButton>Home</NewButton>
        <NewButton>Design New Routine</NewButton>
        <NewButton>Add New Exercises</NewButton>
    </HeaderContainer>

    )}

export default Header;

const HeaderContainer = styled.div`
    justify-content:space-around;
    font-family: 'Lobster', cursive;
    color: black;
    text-align: center;
    font-size: 3.5em;

`;

const NewButton = styled.button`
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Lobster', cursive;
    font-size: 0.4em;
    // margin: 1em;
    padding: 0.2em 1em;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    } 
    margin-left: 5em;
`