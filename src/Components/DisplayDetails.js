import styled from "styled-components";
import React, { useEffect, useState } from "react";


function DisplayDetails ({routineExercises}) {
    console.log(routineExercises)
    // instructions: "4 sets of 8-10 reps"
    // name: "Leg Press"
    // personal_trainer_id: 1
    // routine_id: 1
    return (
    <Layout>

    <div>
        <h5 style={{color:"grey"}}>Click on a Routine for more details!</h5>
    </div>
    <div>
    {routineExercises.map(exercise => 
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
    /* width: 50em;
    height: 50em; */

    height: 80vh;
    width: 95%;
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    float:right;
    text-align: center;
    /* margin-right: 10rem; */
    margin: 1rem 1rem 1rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    overflow: scroll;
`;
const ExerciseBox = styled.div`
    margin: 48px auto 0;
    width: 650px;
    height: 100px;
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