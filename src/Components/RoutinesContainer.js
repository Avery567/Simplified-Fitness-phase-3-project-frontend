import Routine from "./Routine";
import CreateRoutineForm from "./CreateRoutineForm";

function RoutinesContainer ({routines}) {
    return (
        <>
            <h3>routines</h3>
            {routines.map(routine => <Routine key={routine.id} routine={routine}/>)}
            <CreateRoutineForm />

        </>

    )}

export default RoutinesContainer