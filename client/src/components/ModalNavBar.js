import React from "react";
import styled, { css } from "styled-components";
import { MdOutlineExploreOff } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GiBreakingChain } from "react-icons/gi";
import { RiMoonFill } from "react-icons/ri";
import ToggleButton from "./common/ToggleButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import { BiCommentAdd } from "react-icons/bi";
import { themeActions } from "../store/themeSlice";

const Background = styled.section`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  text-align: left;
  align-items: end;
`;

const Container = styled.div`
  margin-top: 80px;
  box-shadow: rgb(4 17 29 / 25%) 0 0 8px 0;
  height: 100%;
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

  const onClickToggleButton = () => {
    dispatch(themeActions.toggleThemeMode());
  };

  const handleModalOff = (e) => {
    const clicked = e.target.closest(".background");
    if (clicked) return closeModal(e);
  };

  const closeModal = () => {
    dispatch(modalActions.closeMenuModal());
  };

  return (
    <Background
      className="background"
      onClick={(e) => {
        handleModalOff(e);
      }}
    >
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
        <MenusContainer>
          <div className="contents">
            <div className="menu">
              <RiMoonFill size="30px" />
              <span className="menu-name">My wallet</span>
            </div>
            <ToggleButton
              size="20px"
              checked={themeMode === "dark"}
              onClick={onClickToggleButton}
            />
          </div>
        </MenusContainer>
      </Container>
    </Background>
  );
};

export default ModalNavBar;
