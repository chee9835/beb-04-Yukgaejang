import React from "react";
import styled, { css } from "styled-components";
import AccountButton from "./AccountButton";
import WalletButton from "./WalletButton";
import { Link } from "react-router-dom";

const MainContainer = styled.section`
  display: flex;
  min-width: 200px;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;

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

  &:hover {
    color: #0c1822;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      color: #cbcbcb;

      .link {
        color: #cbcbcb;

        &:hover {
          color: white;
        }
      }
    `}
`;
const Nav = () => {
  return (
    <MainContainer>
      <MenusContainer>
        <Menus>
          <Link className="link" to="/explore">
            Explore
          </Link>
        </Menus>
        {/*<Menus>Stats</Menus>*/}
        {/*<Menus>Resources</Menus>*/}
        <Menus>
          <Link className="link" to="/create">
            Create
          </Link>
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
