import styled from "styled-components";


function Routine ({routine}) {
    return (
    <RoutineBox>
        <img alt= "muscle-group" src={routine.image}/>
        <h3>{routine.routine_name}</h3>
        <RoutineContent>Focus: {routine.muscle_group}</RoutineContent>
        <DetailButton>See Exercises</DetailButton>
        
    </RoutineBox>
    )}

export default Routine;

const RoutineBox = styled.div`
    overflow: hidden;
    margin: 48px auto 0;
    width: 350px;
    height: 500px;
    font-family: Quicksand, arial, sans-serif;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);color: black;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    // background: white;
    border: 2px solid WHITE;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
        }

`;

const DetailButton = styled.button`
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Lobster', cursive;
    font-size: 1.25em;
    margin: 2em;
    padding: 0.25em 1em;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    }
`;

const RoutineContent = styled.h5`
    // background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Montagu Slab', serif;
    font-size: 1.25em;
    margin: 2em;
    padding: 0.25em 1em;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    }
`;