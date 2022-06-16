import React from "react";
import styled, { css } from "styled-components";
import AccountButton from "./AccountButton";
import WalletButton from "./WalletButton";
import { Link, useLocation } from "react-router-dom";
import palette from "../styles/palette";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";

const MainContainer = styled.section`
  display: flex;
  min-width: 200px;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;

  .explore-link {
    position: relative;
  }

  .create-link {
    position: relative;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #05111d;
    `}
`;

const MenusContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  margin-right: 40px;
`;

const Menus = styled.button`
  all: unset;
  color: #424c55;
  font-size: 15px;
  font-weight: 600;
  margin-left: 30px;
  cursor: pointer;
  position: relative;

  .explore-indication,
  .create-indication,
  .add-indication {
    width: 90px;
    height: 4px;
    background-color: ${palette.primary};
    position: absolute;
    bottom: -22px;
    left: -16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .explore-indication {
    display: ${({ path }) => (path === "/explore" ? "block" : "none")};
  }

  .create-indication {
    display: ${({ path }) => (path === "/create" ? "block" : "none")};
  }

  .add-indication {
    left: -24px;
    display: ${({ path }) => (path === "/add" ? "block" : "none")};
  }

  &:hover {
    color: #0c1822;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      color: #cbcbcb;

      .explore-link,
      .create-link,
      .add-link {
        color: #cbcbcb;

        &:hover {
          color: white;
        }
      }
    `}
`;

const Nav = () => {
  const location = useLocation();

  const path = location.pathname;

  const dispatch = useDispatch();

  const metaMaskAddress = useSelector(
    (state) => state.metaMask.metaMaskAddress
  );

  const onClickWalletButton = () => {
    if (metaMaskAddress === "") {
      dispatch(modalActions.openLoginModal());
    } else {
      dispatch(modalActions.openWalletModal());
    }
  };

  const closeModal = () => {
    dispatch(modalActions.closeMenuModal());
    dispatch(modalActions.closeLoginModal());
    dispatch(modalActions.closeWalletModal());
  };

  return (
    <MainContainer>
      <MenusContainer>
        <Menus path={path}>
          <Link className="explore-link" to="/explore">
            Explore
          </Link>
          <div className="explore-indication" />
        </Menus>
        <Menus path={path}>
          <Link className="create-link" to="/create">
            Create
          </Link>
          <div className="create-indication" />
        </Menus>
        <Menus path={path}>
          <Link className="add-link" to="/add">
            Add
          </Link>
          <div className="add-indication" />
        </Menus>
        <div className="icon-wrapper">
          <Menus onClick={closeModal}>
              <AccountButton className="icon" />
          </Menus>
          <Menus onClick={onClickWalletButton}>
            <WalletButton className="icon" />
          </Menus>
        </div>
      </MenusContainer>
    </MainContainer>
  );
};

export default Nav;
