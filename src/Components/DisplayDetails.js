import styled from "styled-components";

function DisplayDetails ({routineDetail}) {

    console.log(routineDetail)

// console.log(exercises)

//     const [edit, setEdit] = useState(false)
//     const [updatedExercises, setUpdatedExercises] = useState(exercise.instructions);

//     const handleEditExercise = () => setEdit(!edit)

//     const editExercise = () => {
//         return(
//             <>
//             <label htmlFor="instructions">Instructions:</label> 
//             <textarea name="instructions" />
//             </>
//         )
//     }

//   // value={updatedIng} 
//             // onChange={e => updateIngredients(e, id)}

//     const updateExercise = (e, id) => {
//         const newExercise = e.target.value
//         fetch(`http://localhost:9292/exercises/${id}`,{
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({instructions: newExercise})
//         })
//         .then(setUpdatedExercises(updatedExercises))
//     }



    return (
    <Layout>
  
        <div>
            {routineDetail.map(exercise => 
                <>
                    <ExerciseBox>
                        <p>Exercise Name: {exercise.name}</p>
                        <p>Instructions: {exercise.instructions}</p>
                    </ExerciseBox>
                </> 
            )} 

        </div>

    </Layout>

    );
}


export default DisplayDetails;

const Layout = styled.div`
    height: 80vh;
    width: 95%;
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    float:right;
    text-align: center;
    margin: 1rem 1rem 1rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    overflow: scroll;
`;
const ExerciseBox = styled.div`
    overflow-y: scroll;
    margin: 48px auto 0;
    width: 650px;
    height: 125px;
    font-family: Quicksand, arial, sans-serif; 
    font-size: 1.25em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    border: 2px solid WHITE;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
        }
`;

// const DetailButton = styled.button`
//     background: ${props => props.primary ? "black" : "white"};
//     color: ${props => props.primary ? "white" : "black"};
//     font-family: 'Lobster', cursive;
//     font-size: 0.8em;
//     margin: 0.5em;
//     padding: 0.01em 0.5em;
//     border: 2px solid WHITE;
//     border-radius: 3px;
//     cursor: pointer;
//     box-shadow: 0 0 3px gray;
//     &:hover {
//         outline: none;
//         transform: scale(1.05);
//     }
// `;

