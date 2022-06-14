import React from 'react';
import styled from "styled-components";
import MetaMaskButton from "./MetaMaskButton";
import AccountButton from "./AccountButton";
import {Link} from "react-router-dom";

const MainContainer = styled.section`
  display: flex;
  min-width: 200px;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  align-items: center;
`

const MenusContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  margin-right: 40px;
`
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
`
const Nav = () => {


    return (
        <div>
            <MainContainer>
                <MenusContainer>
                    <Menus><Link to="/explore">Explore</Link></Menus>
                    <Menus>Stats</Menus>
                    <Menus>Resources</Menus>
                    <Menus> <Link to="/create">Create</Link></Menus>
                    <div className='icon-wrapper'>
                        <Menus><AccountButton/></Menus>
                        <Menus><MetaMaskButton/></Menus>
                    </div>
                </MenusContainer>
            </MainContainer>
        </div>
    );
};

export default Nav;