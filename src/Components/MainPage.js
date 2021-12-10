import RoutinesContainer from "./RoutinesContainer";
import styled from "styled-components";
import ContactUs from "./ContactUs";
import React from "react";
import Header from "./Header";


function MainPage ({routines, exercises, handleDelete, deleteExercise}) {

    return (
        <>
            <Styleddiv>
            <Header />  
            <RoutinesContainer exercises={exercises} routines={routines} handleDelete={handleDelete} deleteExercise={deleteExercise}/>
            <ContactUs/>
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
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;
`