import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  canvas {
    border: 1px solid #b4d9fff9;
    border-radius: 20px;
    //flex: 1;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #191919;
  border-radius: 20px;
  background-color: #b4d9fff9;
  font-size: 1rem;
  font-family: SF Pro Display, -apple-system, sans-serif;
`;
