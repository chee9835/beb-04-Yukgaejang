import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { metaMaskActions } from "../store/metaMaskSlice";
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'

const Container = styled.button`
  width: 32px;
  height: 32px;
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  color: #424c55;
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

  return <Container onClick={onClickMetaMask}>
    <MdOutlineAccountBalanceWallet color={'424c55'} size={'35px'} />
  </Container>;
};

export default MetaMaskButton;
