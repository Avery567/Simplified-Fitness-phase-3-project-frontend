import {useState} from "react"
// import styled from "styled-components"
import {Link} from "react-router-dom"

function CreateRoutineForm ({handleAddRoutine}) {
    // const handleAddRoutine = ""
    // console.log(props)
    const [formData, setFormData] = useState({
        routine_name: '',
        muscle_group: '',
        personal_trainer_id: '',
        routine_image: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        const newRoutine = {...formData}
        e.preventDefault() 
        handleAddRoutine(newRoutine)
        reset()
    }

    const reset = () => {
        setFormData({
            routine_name: '',
            muscle_group: '',
            personal_trainer_id: '',
            routine_image: ''

        })
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='RoutineName'> Routine Name: </label>
            <input id='RoutineName' type ='text' name='routine_name' placeholder='Routine name here...' value={formData.routine_name} onChange={handleChange}></input>

            <div>
                <label htmlFor='MuscleGroup' > Muscle Group: </label>
                <input  type='text' id='MuscleGroup' name='muscle_group' placeholder='Muscle Group here...' value={formData.muscle_group} onChange={handleChange}>
                </input>
            </div>

            <div>
                <label htmlFor='PersonalTrainer'> Personal Trainer ID: </label>
                <input type='number' id='PersonalTrainerID' name='personal_trainer_id' placeholder='Personal Trainer ID here...' value={formData.personal_trainer_id} onChange={handleChange}></input>
            </div>

            <label htmlFor='image'> Picture URL: </label>
            <input id='imageInput' type='url' name='routine_image' placeholder='Image here...' value={formData.routine_image} onChange={handleChange}></input>
            <div className="button-div">
                <button type="reset" onClick={handleSubmit}>Add Routine </button>
            </div>
        </form>
    </>

    );
}

export default CreateRoutineForm;