import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import CreateRoutineForm from "./CreateRoutineForm";
import CreateExerciseForm from "./CreateExerciseForm";
import ContactUs from "./ContactUs";
import React, {useEffect, useState } from "react";
import {Route, useHistory} from "react-router-dom";


function App() {  

  const potato = (data) => data.json()
  const [routines, setRoutines] = useState([])
  const [exercises, setExercise] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/routines")
    .then(potato)
    .then(setRoutines)
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/exercises")
    .then(potato)
    .then(setExercise)
  },[])


  const history = useHistory()

  const handleAddRoutine = (newRoutine) => {
    fetch('http://localhost:9292/routines', {
      method:'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(newRoutine)
    }) 
    .then(potato)
    .then(newRoutineFromBackend => {
        const updatedRoutines =  [newRoutineFromBackend, ...routines]
        setRoutines(updatedRoutines)
        history.push("/mainpage")
    })
}

const handleAddExercise = (newExercise) => {
  fetch('http://localhost:9292/exercises', {
      method:'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(newExercise)
  }) 
  .then(potato)
  .then(newExerciseFromBackend => {
    const updatedExercises =  [newExerciseFromBackend, ...exercises]
    setExercise(updatedExercises)
    history.push("/mainpage")
  })
}

const handleDelete = (id) => {

  fetch(`http://localhost:9292/routines/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then(potato)
  .then(setRoutines)
}

const deleteExercise = (id) => {

  fetch(`http://localhost:9292/exercises/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then(potato)
  .then(setExercise(exercises.filter(exercise => exercise.id !== id)))
}

  return (
    <>
      <Route exact path = "/">
        <LandingPage />
      </Route>
      <Route exact path = "/mainpage">
        <MainPage exercises={exercises} routines={routines} handleDelete={handleDelete} deleteExercise={deleteExercise}/>
      </Route>
      <Route exact path= "/newexercise">
        <CreateExerciseForm handleAddExercise={handleAddExercise}/>
      </Route>
      <Route exact path= "/newroutine">
        <CreateRoutineForm handleAddRoutine={handleAddRoutine}/>    
      </Route>
      <Route exact path="/contactus">
        <ContactUs/>
      </Route>
    </>
  );
}

export default App;