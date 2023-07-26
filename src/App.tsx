import React from "react";
import CanvasMVP from "./modules/Canvas";
import { Container, Header, Title, Subtitle } from "./App.styles";

function App() {
  return (
    <Container className="App">
      <Header>
        <Title>Draw it! </Title>
        <Subtitle>Create and see the results on the right side .</Subtitle>
      </Header>
      <CanvasMVP />
    </Container>
  );
}

export default App;
