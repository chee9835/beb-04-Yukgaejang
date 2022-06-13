import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { metaMaskActions } from "../store/metaMaskSlice";

const Container = styled.div`
  width: 32px;
  height: 32px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
`;

const MetaMaskButton = () => {
  const dispatch = useDispatch();

  const onClickMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      const res = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(metaMaskActions.setMetaMaskAddress(res[0]));
    }
  };

  return <Container onClick={onClickMetaMask} />;
};

export default MetaMaskButton;
