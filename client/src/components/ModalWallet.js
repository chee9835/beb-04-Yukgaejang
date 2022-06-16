import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import useMetaMask from "../hooks/useMetaMask";
import { RiAccountCircleFill } from "react-icons/ri";
import { modalActions } from "../store/modalSlice";
import { parseAddress, showBalance } from "../lib/utils";

const Background = styled.section`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 996;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  text-align: left;
  align-items: end;
`;

const Container = styled.div`
  right: 0;
  box-shadow: rgb(4 17 29 / 25%) 0 0 8px 0;
  height: 100%;
  position: fixed;
  z-index: 997;
`;

const TitleContainer = styled.div`
  width: 400px;
  height: 80px;
  background-color: #fdfdfd;
  text-decoration: none;
  border: none;
  cursor: grab;

  .title-wrapper {
    display: flex;
    align-items: center;
    color: #35383f;
    padding: 20px;
    border-bottom: 1px solid #e3e6e9;
  }

  .title-wrapper-left {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .title {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
  }

  .wallet-address {
    flex: 0.5;
    min-width: 20px;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #202225;

      .title-wrapper {
        border-bottom: #151b22;
        color: white;
      }
    `}
`;

const ContentContainer = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fdfdfd;
  text-decoration: none;
  border: none;
  cursor: grab;
  padding: 21px;

  .wallet-button {
    color: #2081e2;
    font-weight: 600;
    cursor: pointer;
  }

  .metamask-balance-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .metamask-balance-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    width: 350px;
    height: 90px;
    gap: 10px;
    border: 1px solid #e5e8eb;
    border-radius: 10px 10px 0 0;
  }

  .total {
    font-size: 14px;
    font-weight: 500;
    color: #6f7982;
  }

  .balance {
    font-size: 20px;
    font-weight: 600;
  }

  .add-funds-button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    font-weight: 600;
    background-color: #2081e2;
    width: 350px;
    height: 50px;
    border: none;
    border-radius: 0 0 10px 10px;

    &:hover {
      box-shadow: rgb(0 0 0 / 10%) 0 2px 15px;
      transition: 0.2s ease;
      opacity: 0.8;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #202225;

      .metamask-balance-text-wrapper {
        border: 1px solid #151b22;
      }

      .balance {
        color: white;
      }
    `}
`;

const ModalWallet = () => {
  const [disabled, setDisabled] = useState(false);

  const { loginWithMetaMask } = useMetaMask();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickMetaMask = () => {
    setDisabled(true);

    loginWithMetaMask();
    closeModal();
    navigate(`/`);
    // 로그인에 성공하면 리다이렉트
  };

  const closeModal = () => {
    dispatch(modalActions.closeWalletModal());
  };

  const metaMaskAddress = useSelector(
    (state) => state.metaMask.metaMaskAddress
  );
  const metaMaskBalance = useSelector((state) => state.metaMask.balance);

  return (
    <>
      <Container>
        <TitleContainer disabled={disabled}>
          <div className="contents">
            <div className="title-wrapper">
              <div className="title-wrapper-left">
                <RiAccountCircleFill size="30px" />
                <span className="title">My wallet</span>
              </div>
              <span className="wallet-address">
                {parseAddress(metaMaskAddress)}
              </span>
            </div>
          </div>
        </TitleContainer>
        <ContentContainer disabled={disabled}>
          <div className="contents">
            <div className="metamask-balance-wrapper" onClick={onClickMetaMask}>
              <div className="metamask-balance-text-wrapper">
                <div className="total">Total balance</div>
                <div className="balance">{showBalance(metaMaskBalance)}</div>
              </div>
              <button className="add-funds-button">Add Funds</button>
            </div>
          </div>
        </ContentContainer>
      </Container>
      <Background onClick={closeModal} />
    </>
  );
};

export default ModalWallet;
