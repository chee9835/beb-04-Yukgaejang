import React from "react";
import styled from "styled-components";
import MetaMaskButton from "./MetaMaskButton";
import { RiAccountCircleLine } from "react-icons/ri";

const Nav = () => {
  const MainContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #8d4242;
    align-items: center;
    box-shadow: 5px 5px 5px #e6e5e5;
  `;

  const MenusContainer = styled.div`
    flex: 1;
    justify-content: flex-end;
    text-align: right;
  `;
  const Menus = styled.button`
    all: unset;
    color: #424c55;
    font-size: 20px;
    font-weight: 600;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    .text {
      margin-bottom: 50px;
    }

    &:hover {
      color: #0c1822;
    }
  `;

  return (
    <div>
      <MainContainer>
        <MenusContainer>
          <Menus>Explore</Menus>
          <Menus>Stats</Menus>
          <Menus>Resources</Menus>
          <Menus>Create</Menus>
          <Menus>
            <RiAccountCircleLine font-size={"30px"} />
          </Menus>
          <Menus>
            <MetaMaskButton />
          </Menus>
        </MenusContainer>
      </MainContainer>
    </div>
  );
};

export default Nav;
