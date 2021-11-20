import { send } from 'emailjs-com';
import {useState} from "react"
import styled from "styled-components"
import Header from "./Header"

function ContactUs () {

    const [formMessage, setFormMessage] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const handleContactChange = (e) => {
        setFormMessage({...formMessage, [e.target.name]:e.target.value})
        // console.log(e.target.value)
    }

    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault();

        const templateParams = {
            to_name: 'Simplified Fitness',
            from_name: `${formMessage.name} (${formMessage.email})`,
            message: formMessage.message,
        };
    
        send(
            "service_9zjkxw8",
            "template_kcmhwik",
            templateParams,
            "user_fyydFLUFPAtByA3YTHbR7",
        ).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
                alert('Something went wrong, please try again.');
            }
        );
        e.target.reset();
    }

return(

    <BackgroundImage>
        <Header />
        <Layout>
            <form onSubmit={handleSubmit}>
                <Message>We want to hear from you.</Message>
                <Styleddiv>
                    <label>Your Name:</label>
                    <input name="name" value={formMessage.name} onChange={handleContactChange}></input>
                </Styleddiv>
                <Styleddiv>
                    <label>Your Email:</label>
                    <input name="email" value={formMessage.email} onChange={handleContactChange}></input>
                </Styleddiv>
                <Styleddiv>
                    <label>Message:</label>
                    <input name="message" value={formMessage.message} onChange={handleContactChange}></input>
                </Styleddiv>
                <DetailButton>Send!</DetailButton>
            </form>
         </Layout>
    </BackgroundImage>

)}
export default ContactUs;

const DetailButton = styled.button`
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Lobster', cursive;
    font-size: 1.5em;
    margin: 0.5em;
    padding: 0.01em 0.5em;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    }
`;

const BackgroundImage = styled.div`
    
    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;
`

const Styleddiv = styled.div`

    font-size: 1.5em;
    text-align: center;
    margin: 3rem 1rem 1rem 1rem ; 
`

const Layout = styled.div`
    width: 50em;
    height: auto;
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    float:center;
    vertical-align: center;
    text-align: center;
    margin: auto;
    margin-top: 10rem ;
    background: rgba(255, 255, 255, 0.8);
`;

const Message = styled.p`
    font-family: 'Lobster', cursive;
    font-size: 2em;
    margin-top: 0.7em;

`;