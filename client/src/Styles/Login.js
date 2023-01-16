import styled from "styled-components";

const StyledLoginContainer = styled.div`
min-height:100vh;
z-index: 12;
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
opacity: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:rgb(0, 0,0, 0.6);
  }
`;

const StyledLoginContainerdiv = styled.div`
margin: 0 auto;
height: 528px;
max-width: 750px;
min-width: 650px;
color: #fff;
z-index: 12;
display: flex;
flex-direction: row;
background-color:#fff;
color:#000

  }
`;

export { StyledLoginContainer, StyledLoginContainerdiv };
