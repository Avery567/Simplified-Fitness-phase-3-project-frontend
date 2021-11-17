function CreateExerciseForm () {
    return (
    <>
        <form>
            <label htmlFor='ExerciseName'> Exercise Name: </label>            
            <input 
            id='ExerciseName' 
            type ='text' 
            name='name' 
            placeholder='Exercise name here...' >
            </input>

            <div>
                <label htmlFor='Instructions' > Instructions: </label>
                <input  
                type='text' 
                id='Instructions' 
                name='instructions' 
                placeholder='Instructions here...' >
                </input>
            </div>

            <div>
                <label htmlFor='PersonalTrainerId'> Personal Trainer ID: </label>
                <input 
                type='number' 
                id='PersonalTrainerId' 
                name='personal_trainer_id' 
                placeholder='Personal Trainer ID here...' >                    
                </input>
            </div>
            
            <div>
                <label htmlFor='RoutineId'> Routine ID: </label>
                <input 
                type='number' 
                id='RoutineId' 
                name='routine_id' 
                placeholder='Routine ID here...' >                    
                </input>
            </div>
            <div className="button-div">
                <button>Add Exercise! </button>
            </div>
        </form>
    </>
// This that we are going to need: values[value={formData.name}, value={formData.instructions}, value={formData.personal_trainer_id}, ]onChange={handleChange}
    )}

export default CreateExerciseForm