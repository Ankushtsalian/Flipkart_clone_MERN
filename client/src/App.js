import "./App.css";
import styled from "styled-components";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
