import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import MetaMaskButton from "../components/MetaMaskButton";

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
      <MetaMaskButton />
      <div className="input-wrapper">
        <Input
          type="search"
          placeholder="Search items, collections, and accounts"
          width="600"
        />
      </div>
    </Container>
  );
};

export default Home;
