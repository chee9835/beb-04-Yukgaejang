import React from "react";
import styled, { css } from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);
  z-index: 999;

  .icon {
    width: 25px;
    height: 25px;
  }

  ${({ themeMode }) =>
    themeMode === "dark" &&
    css`
      background-color: #05111d;
      color: white;
    `}
`;

const ThemeButton = ({ themeMode, ...props }) => {
  return (
    <Container themeMode={themeMode} {...props}>
      {themeMode === "light" ? (
        <MdOutlineLightMode className="icon" />
      ) : (
        <MdOutlineDarkMode className="icon" />
      )}
    </Container>
  );
};

export default ThemeButton;
