import styled from "styled-components";

export const DrawingTool = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin: 0 1rem;
  h2,
  p {
    text-align: center;
    color: #fff;
    font-family: SF Pro Display, -apple-system, sans-serif;
  }
`;

export const CanvasContainer = styled(Container)`
  //flex: 1;
`;

export const OutputContainer = styled(Container)`
  min-width: 25%;
  max-width: 50%;
`;
