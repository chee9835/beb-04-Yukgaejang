import React from 'react';
import styled from "styled-components";
import MetaMaskButton from "./MetaMaskButton";
import {RiAccountCircleLine} from "react-icons/ri";
import Input from "./common/Input";


const Header = () => {
    const MainContainer = styled.section`
      display: flex;
      width: 100vw;
      background-color: #FFFFFF;
      height: 100px;
      align-items: center;
      box-shadow: 5px 5px 5px #e6e5e5;

    `
    const LogoImg = styled.div`
      flex: 1 1 auto;
      height: 40px;
      margin-left: 10px;
      cursor: pointer;
    `
    const MenusContainer = styled.section`
      //flex: 1;
      vertical-align: middle;
    `
    const Menus = styled.button`
      all: unset;
      color: #424c55;
      font-size: 20px;
      margin-left: 20px;
      margin-right: 20px;
      font-weight: 600;
      cursor: pointer;
      .text {
      margin-bottom: 50px;
    }

      &:hover {
        color: #0c1822;
      }
    `

    return (
        <div>
            <MainContainer>
                <LogoImg>
                    <img src='/logo.png' alt={'로고'}/>
                </LogoImg>
                <div className="input-wrapper" >
                    <Input
                        type="search"
                        placeholder="Search items, collections, and accounts"
                        width="600"
                    />
                </div>
                <MenusContainer>
                    <Menus className='text'>Explore</Menus>
                    <Menus className='text'>Stats</Menus>
                    <Menus>Resources</Menus>
                    <Menus>Create</Menus>
                    <Menus><RiAccountCircleLine size={'35px'}/></Menus>
                    <Menus><MetaMaskButton/></Menus>
                </MenusContainer>
            </MainContainer>
        </div>
    );
};

export default Header;