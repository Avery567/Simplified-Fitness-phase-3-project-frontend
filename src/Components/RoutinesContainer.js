import Routine from "./Routine";
import styled from "styled-components";

function RoutinesContainer ({routines,handleDelete}) {
    // console.log(handleDelete)
    return (
        <>
        <RoutineHeader>Routine List:</RoutineHeader>
        <GridLayout>
            {routines.map(routine => 
                <Routine 
                key={routine.id} 
                routine={routine}
                handleDelete={handleDelete}
                />)}
        </GridLayout>
        </>
    )}

export default RoutinesContainer;

const GridLayout = styled.div`
    overflow: auto;  
    height: 100em;
    display:inline-block;
    margin: 2em;
    text-align: center;
`;

const RoutineHeader = styled.h1`
    font-family: 'Lobster', cursive;
    color: black;
    text-align: left;
    font-size: 1.8em;

`;