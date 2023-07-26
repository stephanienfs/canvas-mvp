import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  background-color: #282c34;
  font-family: SF Pro Display, -apple-system, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 1rem;
`;
export const Text = styled.p`
  font-style: normal;
  color: #fff;
  text-align: center;
  margin: 0;
`;
export const Title = styled(Text)`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
  font-family: Poppins;
`;
export const Subtitle = styled(Text)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  font-family: SF Pro Display, -apple-system, sans-serif;
`;
