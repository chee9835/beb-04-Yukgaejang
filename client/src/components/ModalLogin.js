import React, { useState } from "react";
import styled from "styled-components";
import useMetaMask from "../hooks/useMetaMask";
import { RiAccountCircleFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../store/modalSlice";

const Background = styled.section`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  text-align: left;
  align-items: end;
`;
const Container = styled.div`
  margin-top: 80px;
  box-shadow: rgb(4 17 29 / 25%) 0 0 8px 0;
  height: 100%;
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

  .title {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
  }
`;
const ContentContainer = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fdfdfd;
  text-decoration: none;
  border: none;
  cursor: grab;
  padding: 21px;

  .description {
    font-size: 16px;
    text-align: left;
    line-height: 1.6;
    color: #35383f;
    padding-left: 5px;
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
    width: 350px;
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
`;

const ModalLogin = () => {
  const loginModalOpen = useSelector((state) => state.modal.loginModalOpen);

  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  const { loginWithMetaMask } = useMetaMask();

  const onClickMetaMask = () => {
    setDisabled(true);
    loginWithMetaMask();
    closeModal();
    // 로그인에 성공하면 리다이렉트
  };

  const [isModalClicked, setIsModalClicked] = useState(true);

  const handleModalOff = (e) => {
    const clicked = e.target.closest(".background");
    if (clicked) return closeModal();
    else {
      setIsModalClicked(true);
    }
  };

  const closeModal = () => {
    dispatch(modalActions.closeLoginModal());
  };

  return (
    <Background
      className="background"
      onClick={(e) => {
        // if (e.target !== e.currentTarget) return;
        setIsModalClicked(false);
        handleModalOff(e);
      }}
    >
      <Container
        className="container"
        onClick={(e) => {
          setIsModalClicked(true);
          e.stopPropagation();
        }}
      >
        <TitleContainer disabled={disabled}>
          <div className="contents">
            <div className="title-wrapper">
              <RiAccountCircleFill size="30px" />
              <span className="title">My wallet</span>
            </div>
          </div>
        </TitleContainer>
        <ContentContainer disabled={disabled}>
          <div className="contents">
            <p className="description">
              Connect with one of our available{" "}
              <span className="wallet-button">wallet</span> providers or create
              a new one.
            </p>
            <br />
            <div className="metamask-button-wrapper" onClick={onClickMetaMask}>
              <div className="metamask-icon-text-wrapper">
                <div className="icon" />
                <span className="metamask-text">MetaMask</span>
              </div>
              <div className="chip">Popular</div>
            </div>
          </div>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default ModalLogin;
