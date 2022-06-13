import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { metaMaskActions } from "../store/metaMaskSlice";

const Container = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;

  .icon {
    &:hover {
      color: red;
    }
  }
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

  return (
    <Container onClick={onClickMetaMask}>
      <MdOutlineAccountBalanceWallet className="icon" size={"100px"} />
    </Container>
  );
};

export default MetaMaskButton;
