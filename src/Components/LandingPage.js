import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

function LandingPage () {
    return (
    <div >
    <Styleddiv>
    <Header />
    <Link to="/mainpage">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <Button variant="success">See my routines!</Button>
    </Link>
    </Styleddiv>
    </div>
    )}

export default LandingPage

const Styleddiv = styled.div`

background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");
position: fixed;
min-width: 100%;
min-height: 100%;
background-size: contain;
background-position: cover;

h1{
    justify-content: center;
}
`