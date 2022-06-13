import React from 'react';
import styled from "styled-components";
import MetaMaskButton from "./MetaMaskButton";


const Header = () => {
    const MainContainer = styled.section`
      display: flex;
      width: 100vw;
      background-color: #FFFFFF;
      height: 100px;
      align-items: center;
      box-shadow: 5px 5px 5px  #e6e5e5;

    `
    const LogoImg = styled.div`
      flex: 1 1 auto;
      height: 40px;
      margin-left: 10px;
      cursor: pointer;
    `

    const Menus = styled.button`
      all: unset;
      color: #424c55;
      font-size: 20px;
      margin: 10px;
      font-weight: 600;
      cursor: pointer;
    `

    return (
        <div>
            <MainContainer>
                <LogoImg>
                    <img src='/logo.png' alt={'로고'}/>
                </LogoImg>
                <Menus>Explore</Menus>
                <Menus>Stats</Menus>
                <Menus>Resources</Menus>
                <Menus>Create</Menus>
                <MetaMaskButton />
            </MainContainer>
        </div>
    );
};

export default Header;