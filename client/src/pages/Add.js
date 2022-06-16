import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 500px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #202225;
      color: white;
    `}
`;

const Add = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onChangeTokenId = (event) => {
    setTokenId(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const buttonDisabled = address === "" || tokenId === "" || price === "";

  return (
    <Container>
      <p className="title">Add tokens to Market</p>
      <Input
        value={address}
        onChange={onChangeAddress}
        type="common"
        placeholder="contract address"
      />
      <Input
        value={tokenId}
        onChange={onChangeTokenId}
        type="common"
        placeholder="token ID"
      />
      <Input
        value={price}
        onChange={onChangePrice}
        type="common"
        placeholder="price"
      />
      <Button type="primary" disabled={buttonDisabled}>
        Send
      </Button>
    </Container>
  );
};

export default Add;
