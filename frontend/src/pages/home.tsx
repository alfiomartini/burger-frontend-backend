import styled from "styled-components";

export const Home = () => {
  return (
    <HomeContainer>
      <h1>Landing Page</h1>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
