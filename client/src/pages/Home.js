import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";

const Container = styled.div`
  .input-wrapper {
    width: 300px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Button type="primary">Explore</Button>
      <Button type="secondary">Create</Button>
    </Container>
  );
};

export default Home;
