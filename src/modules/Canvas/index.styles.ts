import styled from "styled-components";

export const DrawingTool = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  h2,
  p {
    text-align: center;
    color: #fff;
    font-family: SF Pro Display, -apple-system, sans-serif;
  }
`;

export const CanvasContainer = styled(Container)`
  flex: 1;
`;

export const OutputContainer = styled(Container)`
  max-width: 365px;
`;
