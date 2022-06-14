import React, {useState} from 'react';
import styled from "styled-components";
import MetaMaskButton from "./MetaMaskButton";
import {RiAccountCircleLine} from "react-icons/ri";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import Input from "./common/Input";
import Nav from "./Nav";


const Header = () => {
    const [showInput, setShowInput] = useState(false);

    const handleInput = () => {
        setShowInput(!showInput)
    }


    const MainContainer = styled.section`
      display: flex;
      width: 100%;
      height: 100px;
      background-color: #FFFFFF;
      align-items: center;
      box-shadow: 5px 5px 5px #e6e5e5;

      .logo-wrapper {
        flex: 1 1 auto;
        height: 40px;
        margin: 0 10px 15px 20px;
        cursor: pointer;
      }
      
      .input-wrapper {
        display: none;
      }
      .account {
        display: none;
      }
      .wallet {
        display: none;
      }

      @media screen and (min-width: 720px) {
        .search {
          display: none;
        }
        .logo-wrapper {
          flex: 0;
        }
        .input-wrapper {
          flex: 1;
          min-width: 300px;
          width: 100%;
          display: flex;
        }        
        
      }

      @media screen and (min-width: 1000px) {
        .search {
          display: none;
        }
        .logo-wrapper {
          flex: 0;
        }
        .input-wrapper {
          flex: 1;
          min-width: 300px;
          width: 100%;
          display: flex;
        }
        .account {
          display: revert;
        }
        .wallet {
          display: revert;
        }

      }

    `

    const MenusContainer = styled.div`
      justify-content: flex-end;
      text-align: right;
      margin-left: 20px;
    `
    const Menus = styled.button`
      all: unset;
      color: #424c55;
      font-size: 20px;
      font-weight: 600;
      margin-right: 20px;
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
                <div className="logo-wrapper">
                    <img src='/logo.png' alt={'로고'}/>
                </div>
                {/*{showInput ?*/}
                <div className="input-wrapper">
                    <Input
                        type="search"
                        placeholder="Search items, collections, and accounts"
                    />
                </div>
                {/* : null} */}
                <MenusContainer>
                    {/*<Nav className='nav'/>*/}
                    <Menus><RiAccountCircleLine className='account' font-size={'35px'} /></Menus>
                    <Menus><MetaMaskButton className='wallet'/></Menus>
                    <Menus><AiOutlineSearch className='search' onClick={handleInput} font-size={'30px'}/></Menus>
                    <Menus><AiOutlineMenu className='menu' font-size={'30px'} /></Menus>
                </MenusContainer>
            </MainContainer>
        </div>
    );
};

export default Header;