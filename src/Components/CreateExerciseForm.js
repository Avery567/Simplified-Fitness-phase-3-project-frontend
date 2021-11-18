import {useState} from "react"
import {Link} from "react-router-dom"


function CreateExerciseForm ({handleAddExercise}) {
    console.log(handleAddExercise)
    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        personal_trainer_id: '',
        routine_id: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        const newExercise = {...formData}
        e.preventDefault() 
        handleAddExercise(newExercise)
        console.log(e.target)
        reset()
    }

    const reset = () => {
        setFormData({
            name: '',
            instructions: '',
            personal_trainer_id: '',
            routine_id: ''
        })
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='ExerciseName'> Exercise Name: </label>            
            <input 
                id='ExerciseName' 
                type ='text' 
                name='name' 
                placeholder='Exercise name here...' 
                value={formData.name}
                onChange={handleChange}>
            </input>

            <div>
                <label htmlFor='Instructions' > Instructions: </label>
                <input  
                    type='text' 
                    id='Instructions' 
                    name='instructions' 
                    placeholder='Instructions here...'
                    value={formData.instructions}
                    onChange={handleChange}>
                </input>
            </div>

            <div>
                <label htmlFor='PersonalTrainerId'> Personal Trainer ID: </label>
                <input 
                    type='number' 
                    id='PersonalTrainerId' 
                    name='personal_trainer_id' 
                    placeholder='Personal Trainer ID here...'
                    value={formData.personal_trainer_id}
                    onChange={handleChange}>                    
                </input>
            </div>
            
            <div>
                <label htmlFor='RoutineId'> Routine ID: </label>
                <input 
                    type='number' 
                    id='RoutineId' 
                    name='routine_id' 
                    placeholder='Routine ID here...' 
                    value={formData.routine_id}
                    onChange={handleChange}/>
            </div>
           
            <div className="button-div">
            <button type="reset" onClick={handleSubmit}>Add Exercise </button>
            </div>
            
        </form>
    </>
    );
}

export default CreateExerciseForm;