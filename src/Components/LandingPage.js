import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage () {
    return (
    <div >
    <Styleddiv>
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
padding-bottom:10px;
margin-top:20px;
margin-bottom:20px;
margin-left: 70px;
margin-right: 70px;

h1{
    justify-content: center;
}
`