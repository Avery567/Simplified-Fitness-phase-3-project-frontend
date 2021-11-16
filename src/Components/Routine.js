
function Routine ({routine}) {
    console.log(routine)
    return (
    <div>
        <h3>Routine Name: {routine.routine_name}</h3>
        <h5>Muscle Group: {routine.muscle_group}</h5>
    </div>
    )}

export default Routine