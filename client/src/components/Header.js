import React, {useState} from 'react';
import styled from "styled-components";
import MetaMaskButton from "./MetaMaskButton";
import AccountButton from "./AccountButton";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import Input from "./common/Input";
import Nav from "./Nav";
import {Link} from "react-router-dom";

const MainContainer = styled.section`
  display: flex;
  min-width: 200px;
  width: 100%;
  height: 80px;
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

  .nav {
    display: none;
  }
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

  @media screen and (min-width: 1200px) {
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
      display: none;
    }

    .wallet {
      display: none;
    }

    .menu {
      display: none;
    }

    .nav {
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

const Header = () => {
    const [showInput, setShowInput] = useState(false);

    const handleInput = () => {
        setShowInput(!showInput)
    }

    return (
        <div>
            <MainContainer>
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src='/logo.png' alt={'로고'}/>
                    </Link>
                </div>
                {/*{showInput ?*/}
                <div className="input-wrapper">
                    <Input
                        type="search"
                        placeholder="Search items, collections, and accounts"
                    />
                </div>
                {/*: null}*/}
                <MenusContainer>
                    <Menus className='account'><AccountButton/></Menus>
                    <Menus className='wallet'><MetaMaskButton/></Menus>
                    <Menus className='search'><AiOutlineSearch onClick={handleInput} size={'30px'}/></Menus>
                    <Menus className='menu'><AiOutlineMenu size={'30px'}/></Menus>
                    <div className='nav'><Nav/></div>
                </MenusContainer>
            </MainContainer>
        </div>
    );
};

export default Header;