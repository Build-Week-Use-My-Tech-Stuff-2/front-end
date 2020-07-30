import styled, { keyframes } from 'styled-components'

const SignUpDiv = styled.div`
background-color: rgba(245, 245, 245, .65);
border: 2px solid black;
padding: 1%;
display: flex;
flex-direction: column;
align-items: center;
width: 33%;
height: 70%;
margin: 5% auto 0 auto;
border-radius: 3px;
box-shadow: 0 3px .1px 2px;
`;

const SubmitButton = styled.button`
margin-top: 10%;
width: 80px;
height: 40px;
text-align: center;
background-color: #FC642D;
color: white;
border: 1px solid black;
border-radius: 5px;
font-weight: 600;
`;

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position:  100% 50%;
    }
    100% {
        background-position: 0% 50%
    }
 `

const AppDiv = styled.div`
min-height: 100vh;
background: linear-gradient( -45deg,  #FF5A5F, #FFFFFF, #00A699, #FF5A5F, #FFFFFF );
background-size: 400% 400%;
text-align: center;
display: flex;
flex-direction: column;
animation: ${gradient} 15s ease infinite;
position: relative;
`;



const LinkSpan = styled.span`
padding: 0 1%;
margin: 0 1%;
`;

const AppNav = styled.nav`
background: #FC642D;
border: 2px solid #484848;
border-radius: 10px;
width: 30%;
padding: .5%;
display: flex;
justify-content: space-around;
margin: 0 auto;
`;

const LabelDiv = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
`;

const ErrorDiv = styled.div`
display: flex;
justify-content: flex-end;
color: red;
font-size: .8rem;
height: 10px;
width: 80%;
margin-bottom: .5rem;   
`;

export {SignUpDiv, SubmitButton, AppDiv, LinkSpan, AppNav, LabelDiv, ErrorDiv}