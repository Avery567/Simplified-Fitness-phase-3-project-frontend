import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import MainPage from './Components/MainPage';
import CreateRoutineForm from './Components/CreateRoutineForm';
import CreateExerciseForm from './Components/CreateExerciseForm';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    {/* <App />
    <Route path="/"> */}
       <App />
    {/* </Route>

    <Route path="/mainpage">
        <MainPage />
    </Route>
    
    <Route exact path="/newroutine">
        <CreateRoutineForm/>
    </Route>

    <Route exact path="/newexercise">
        <CreateExerciseForm/>    
    </Route> */}
   </BrowserRouter>,
  document.getElementById('root')
);
