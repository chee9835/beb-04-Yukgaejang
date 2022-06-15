import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

const getButtonSize = (size) => {
  switch (size) {
    case "large":
      return css`
        width: 254px;
      `;
    case "small":
      return css`
        width: 108px;
      `;
    default:
      return css`
        width: 167px;
      `;
  }
};

const getButtonType = (type) => {
  switch (type) {
    case "primary":
      return css`
        background-color: ${palette.primary};
        color: white;
        &:hover {
          background-color: #42a0ff;
          transition: 0.2s ease;
        }
        &:active {
          background-color: #1768b8;
        }
      `;
    case "secondary":
      return css`
        background-color: white;
        color: ${palette.primary};
        border: 2px solid #e5e8eb;

        &:hover {
          box-shadow: rgb(0 0 0 / 10%) 0 2px 10px;
          transition: 0.2s ease;
        }

        ${({ theme }) =>
          theme.mode === "dark" &&
          css`
            background-color: #303339;
            color: white;
            border: none;

            &:hover {
              background-color: #4c505c;
              transition: 0.2s ease;
            }
            &:active {
              opacity: 0.4;
            }
          `};
      `;
    default:
      return css`
        background-color: ${palette.primary};
        color: white;
      `;
  }
};

const Container = styled.button`
  background-color: ${palette.primary};
  height: 60px;
  border: none;
  color: white;
  padding: 17px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.4;
    `}

  ${({ size }) => getButtonSize(size)};

  ${({ type }) => getButtonType(type)};
`;

const Button = ({ disabled, type, size, children, ...props }) => {
  return (
    <Container disabled={disabled} type={type} size={size} {...props}>
      {children}
    </Container>
  );
};

export default Button;
