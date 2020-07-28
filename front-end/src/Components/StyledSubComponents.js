import styled from 'styled-components'

const SignUpDiv = styled.div`
background-color: white;
border: 2px solid black;
padding: 1%;
display: flex;
flex-direction: column;
align-items: center;
width: 20%;
margin: 5% auto 0 auto;
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

export {SignUpDiv, SubmitButton}