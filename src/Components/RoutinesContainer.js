import Routine from "./Routine";
import styled from "styled-components";

function RoutinesContainer ({routines}) {
    return (
        <GridLayout>
            {routines.map(routine => 
                <Routine 
                key={routine.id} 
                routine={routine}
                />)}
        </GridLayout>
    )}

export default RoutinesContainer;

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  text-align: center;
  overflow-y: auto;
  justify-self: center;
  grid-template-rows: 1.5fr 1.5fr 1.5fr;
  grid-template-columns: 1fr 1fr 1fr;
`;