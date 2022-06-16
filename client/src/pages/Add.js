import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 40px;

  .contents {
    width: 720px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .label {
    font-size: 20px;
    font-weight: 500;
  }

  @media screen and (min-width: 720px) {
    padding: 100px;
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
      <div className="contents">
        <p className="title">Add tokens to Market</p>
        <label className="label">Contract Address</label>
        <Input
          value={address}
          onChange={onChangeAddress}
          type="common"
          placeholder="contract address"
        />
        <label className="label">Token ID</label>
        <Input
          value={tokenId}
          onChange={onChangeTokenId}
          type="common"
          placeholder="token ID"
        />
        <label className="label">Price</label>
        <Input
          value={price}
          onChange={onChangePrice}
          type="common"
          placeholder="price"
        />
        <Button type="primary" disabled={buttonDisabled}>
          Send
        </Button>
      </div>
    </Container>
  );
};

export default Add;
