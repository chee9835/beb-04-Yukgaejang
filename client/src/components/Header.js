import React, {useState} from "react";
import styled, {css} from "styled-components";
import AccountButton from "./AccountButton";
import WalletButton from "./WalletButton";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import Input from "./common/Input";
import Nav from "./Nav";
import {Link} from "react-router-dom";

const MainContainer = styled.div`
  box-shadow: rgb(4 17 29 / 25%) 0 0 8px 0;
  position: sticky;
  top: 0;
  z-index: 999;

  .header {
    display: flex;
    min-width: 200px;
    width: 100%;
    height: 80px;
    background-color: white;
    align-items: center;
  }

  .logo-wrapper {
    flex: 1 1 auto;
    height: 40px;
    margin: 0 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding-right: 110px;
  }

  .logo-text {
    color: black;
    font-size: 21px;
    font-weight: 700;
  }

  .input-wrapper {
    display: none;
  }

  .menu-wrapper {
    padding-left: 110px;
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
  }

  ${({theme}) =>
          theme.mode === "dark" &&
          css`
            .header {
              background-color: #05111d;
            }

            .logo-text {
              color: white;
            }

            .icon {
              color: #424c55;

              &:hover {
                color: white;
              }
            }
          `}
`;

const MenusContainer = styled.div`
  justify-content: flex-end;
  text-align: right;
  margin-left: 20px;
`;

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
`;

const Header = () => {
    const [showInput, setShowInput] = useState(false);

    const handleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <MainContainer>
            <section className="header">
                <Link to="/">
                    <div className="logo-wrapper">
                        <img src="/open-sea-logo.png" width="42px" alt="로고"/>
                        <p className="logo-text">OpenSea</p>
                    </div>
                </Link>
                {/*{showInput ?*/}
                <div className="input-wrapper">
                    <Input
                        type="search"
                        placeholder="Search items, collections, and accounts"
                    />
                </div>
                {/*: null}*/}
                <MenusContainer className="menu-wrapper">
                    <Menus className="account">
                        <AccountButton className="icon"/>
                    </Menus>
                    <Menus className="wallet">
                        <WalletButton className="icon"/>
                    </Menus>
                    <Menus className="search">
                        <AiOutlineSearch
                            className="icon"
                            onClick={handleInput}
                            size="30px"
                        />
                    </Menus>
                    <Menus className="menu">
                        <AiOutlineMenu className="icon" size="30px"/>
                    </Menus>
                    <div className="nav">
                        <Nav/>
                    </div>
                </MenusContainer>
            </section>
        </MainContainer>
    );
};

export default Header;
