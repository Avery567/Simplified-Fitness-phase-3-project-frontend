import Routine from "./Routine";
import DisplayDetails from "./DisplayDetails";
import styled from "styled-components";

function RoutinesContainer ({routines,handleDelete}) {
    // console.log(handleDelete)
    return (
        <>
        <RoutineHeader>Routine List:</RoutineHeader>
        <RoutineClass >
        <GridLayout>
            {routines.map(routine => 
                <Routine 
                key={routine.id} 
                routine={routine}
                handleDelete={handleDelete}
                />)}
        </GridLayout>
            <DisplayDetails />
        </RoutineClass >
        </>
    )}

export default RoutinesContainer;

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: left;
    overflow-y: auto;
    height: 80vh;
    width: 80%;
`;

const RoutineHeader = styled.h1`
    font-family: 'Lobster', cursive;
    color: black;
    text-align: left;
    font-size: 1.8em;

`;

const RoutineClass = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`
