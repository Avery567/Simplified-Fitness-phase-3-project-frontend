import RoutinesContainer from "./RoutinesContainer";
import styled from "styled-components";
import DisplayDetails from "./DisplayDetails";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import CreateRoutineForm from "./CreateRoutineForm";
import CreateExerciseForm from "./CreateExerciseForm";

function MainPage () {

    const [routines, setRoutines] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/routines")
        .then(r => r.json())
        .then((routines) => {
        setRoutines(routines)
        })
    }, [])
    // console.log(routines)

    const handleAddRoutine = (newRoutine) => {
        const updatedRoutines =  [newRoutine, ...routines]
        fetch('http://localhost:9292/routines', {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newRoutine)
        }) 
        .then(setRoutines(updatedRoutines))
        .then(console.log(updatedRoutines))
    }

    return (
        <>
            <Styleddiv>
            <Header />  
            <CreateRoutineForm handleAddRoutine={handleAddRoutine}/>
            <CreateExerciseForm />
            <RoutinesContainer routines={routines}/>
            <DisplayDetails />
            </Styleddiv>
        </>
    );
}

export default MainPage;

const Styleddiv = styled.div`

    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: contain;
    background-position: cover;
    background-repeat: no-repeat;
`