import React, { useState } from "react";
import styled, { css } from "styled-components";
import useMetaMask from "../hooks/useMetaMask";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  .contents {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .title {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }

  .description {
    font-size: 16px;
    text-align: left;
    line-height: 1.6;
  }

  .wallet-button {
    color: #2081e2;
    font-weight: 600;
    cursor: pointer;
  }

  .metamask-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 458px;
    height: 58px;
    border: 1px solid #e5e8eb;
    padding: 15px;
    border-radius: 10px;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

    opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};

    &:hover {
      box-shadow: rgb(0 0 0 / 10%) 0 2px 15px;
      transition: 0.2s ease;
    }
  }

  .metamask-icon-text-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    width: 24px;
    height: 24px;
    background-color: gray;
    border-radius: 50%;
  }

  .metamask-text {
    font-size: 14px;
    font-weight: 700;
  }

  .chip {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    height: 26px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    background-color: #2081e2;
    border-radius: 10px;
  }

  @media screen and (min-width: 720px) {
    .metamask-button-wrapper {
      width: 567px;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .title {
        color: white;
      }

      .description {
        color: white;
      }

      .metamask-text {
        color: white;
      }

      .metamask-button-wrapper {
        border: 1px solid #151b22;
      }
    `}
`;

const Login = () => {
  const [disabled, setDisabled] = useState(false);

  const { loginWithMetaMask } = useMetaMask();

  const onClickMetaMask = () => {
    setDisabled(true);

    loginWithMetaMask();

    // 로그인에 성공하면 리다이렉트
  };

  return (
    <Container disabled={disabled}>
      <div className="contents">
        <p className="title">Connect your wallet.</p>
        <p className="description">
          Connect with one of our available{" "}
          <span className="wallet-button">wallet</span> providers or create a
          new one.
        </p>
        <div className="metamask-button-wrapper" onClick={onClickMetaMask}>
          <div className="metamask-icon-text-wrapper">
            <img src="/metamask-icon.png" alt="" width="22px" />
            <span className="metamask-text">MetaMask</span>
          </div>
          <div className="chip">Popular</div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
