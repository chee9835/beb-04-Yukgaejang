import React from "react";
import styled, { css } from "styled-components";
import AccountButton from "./AccountButton";
import WalletButton from "./WalletButton";
import { Link, useLocation } from "react-router-dom";
import palette from "../styles/palette";

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

  .explore-indication {
    width: 90px;
    height: 4px;
    background-color: ${palette.primary};
    position: absolute;
    bottom: 0;
    left: 1122px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: ${({ path }) => (path === "/explore" ? "block" : "none")};
  }

  .create-indication {
    width: 90px;
    height: 4px;
    background-color: ${palette.primary};
    position: absolute;
    bottom: 0;
    left: 1208px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: ${({ path }) => (path === "/create" ? "block" : "none")};
  }

  &:hover {
    color: #0c1822;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      color: #cbcbcb;

      .exlpore-link {
        color: #cbcbcb;

        &:hover {
          color: white;
        }
      }

      .create-link {
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
        <div className="icon-wrapper">
          <Menus>
            <AccountButton className="icon" />
          </Menus>
          <Menus>
            <WalletButton className="icon" />
          </Menus>
        </div>
      </MenusContainer>
    </MainContainer>
  );
};

export default Nav;
