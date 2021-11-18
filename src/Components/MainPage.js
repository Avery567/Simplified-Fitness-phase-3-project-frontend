import RoutinesContainer from "./RoutinesContainer";
import styled from "styled-components";
import DisplayDetails from "./DisplayDetails";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import CreateRoutineForm from "./CreateRoutineForm";
import CreateExerciseForm from "./CreateExerciseForm";
import {Route} from 'react-router-dom';


function MainPage ({routines, handleDelete}) {

    return (
        <>
            <Styleddiv>
            <Header />  
            <RoutinesContainer routines={routines} handleDelete={handleDelete}/>
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
    background-repeat: repeat;
`