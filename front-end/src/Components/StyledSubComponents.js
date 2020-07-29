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

const AppDiv = styled.div`
min-height: 100vh;
background: linear-gradient(#FFFFFF, #FF5A5F);
text-align: center;
display: flex;
flex-direction: column;
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
`;

export {SignUpDiv, SubmitButton, AppDiv, LinkSpan, AppNav, LabelDiv, ErrorDiv}