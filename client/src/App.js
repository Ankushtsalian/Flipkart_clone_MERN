import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  // background-color: var(--color-brand-orange);
  background-color: ${(props) => props.backcolor};
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: darkblue;
    cursor: pointer;
  }
`;

const Body = styled.div`
  background-color: var(--color-page-bg);
  height: 100%;
`;
function App() {
  return <StyledButton backcolor="black" />;
}

export default App;
