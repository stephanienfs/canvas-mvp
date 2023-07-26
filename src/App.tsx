import React from "react";
import CanvasMVP from "./modules/Canvas";
import { Container, Header } from "./App.styles";

function App() {
  return (
    <Container className="App">
      <Header>Draw it!</Header>
      <CanvasMVP />
    </Container>
  );
}

export default App;
