import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border: 0.05rem solid var(--lightBlue);
color:var(--lightGreen);
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 05s ease-in-out;
&:hover{
    background:var(--lightGreen);
    color:var(--mainGreen);

}
&:focus {
    outline: none;
}
`;
