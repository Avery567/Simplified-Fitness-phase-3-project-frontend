import RoutinesContainer from "./RoutinesContainer";
import DisplayDetails from "./DisplayDetails";
import React, { useEffect, useState } from "react";

function MainPage () {

    const [routines, setRoutines] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/routines")
    .then(r => r.json())
    .then((routines) => {
      setRoutines(routines)
    })
  }, [])
  console.log(routines)

    return (
    <>
        <RoutinesContainer routines={routines}/>
        <h1>This is the Main Page!!!!!!!!</h1>
        <DisplayDetails />
    </>

    )}

export default MainPage