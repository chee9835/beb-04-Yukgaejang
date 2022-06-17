import React from "react";
import styled, { css } from "styled-components";
import { MdOutlineExploreOff } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GiBreakingChain } from "react-icons/gi";
import { RiMoonFill } from "react-icons/ri";
import ToggleButton from "../common/ToggleButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";
import { BiCommentAdd, BiLogIn } from "react-icons/bi";
import { themeActions } from "../../store/themeSlice";
import { CgProfile } from "react-icons/cg";

const Background = styled.section`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 997;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  right: 0;
  z-index: 998;
  box-shadow: rgb(4 17 29 / 25%) 0 0 8px 0;
  height: 100%;
  position: fixed;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  z-index: 998;

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #303339;
    `}
`;

const MenusContainer = styled.div`
  width: 400px;
  height: 80px;
  background-color: #fdfdfd;

  .contents {
    display: flex;
    align-items: center;
    color: #424c55;
    padding: 20px;

    &:hover {
      color: #0c1822;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .menu-name {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #303339;
      color: white;

      .menu {
        color: white;
      }
    `}
`;

const ModalNavBar = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  const dispatch = useDispatch();

  const metaMaskAddress = useSelector(
    (state) => state.metaMask.metaMaskAddress
  );

  const onClickToggleButton = () => {
    dispatch(themeActions.toggleThemeMode());
  };

  const closeModal = () => {
    dispatch(modalActions.closeMenuModal());
  };

  return (
    <>
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MenusContainer onClick={closeModal}>
          <Link className="link" to="/explore">
            <div className="contents">
              <div className="menu">
                <MdOutlineExploreOff size="30px" />
                <span className="menu-name">Explore</span>
              </div>
              <IoIosArrowForward size="20px" />
            </div>
          </Link>
        </MenusContainer>
        <MenusContainer onClick={closeModal}>
          <Link className="link" to="/create">
            <div className="contents">
              <div className="menu">
                <GiBreakingChain size="30px" />
                <span className="menu-name">Create</span>
              </div>
              <IoIosArrowForward size="20px" />
            </div>
          </Link>
        </MenusContainer>
        <MenusContainer onClick={closeModal}>
          <Link className="link" to="/add">
            <div className="contents">
              <div className="menu">
                <BiCommentAdd size="30px" />
                <span className="menu-name">Add</span>
              </div>
              <IoIosArrowForward size="20px" />
            </div>
          </Link>
        </MenusContainer>
        {metaMaskAddress && (
          <MenusContainer onClick={closeModal}>
            <Link className="link" to="/mypage">
              <div className="contents">
                <div className="menu">
                  <CgProfile size="30px" />
                  <span className="menu-name">Profile</span>
                </div>
                <IoIosArrowForward size="20px" />
              </div>
            </Link>
          </MenusContainer>
        )}
        <MenusContainer>
          <div className="contents">
            <div className="menu">
              <RiMoonFill size="30px" />
              <span className="menu-name">Night mode</span>
            </div>
            <ToggleButton
              size="20px"
              checked={themeMode === "dark"}
              onClick={onClickToggleButton}
            />
          </div>
        </MenusContainer>

        {!metaMaskAddress && (
          <MenusContainer onClick={closeModal}>
            <Link className="link" to="/login">
              <div className="contents">
                <div className="menu">
                  <BiLogIn size="30px" />
                  <span className="menu-name">Login</span>
                </div>
                <IoIosArrowForward size="20px" />
              </div>
            </Link>
          </MenusContainer>
        )}
      </Container>
      <Background onClick={closeModal} />
    </>
  );
};

export default ModalNavBar;
