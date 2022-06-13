import React from "react";
import styled, { css } from "styled-components";

const getButtonSize = (size) => {
  switch (size) {
    case "large":
      return css`
        width: 254px;
      `;
    case "small":
      return css`
        width: 112px;
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
        background-color: #2081e2;
        color: white;
        &:hover {
          background-color: #42a0ff;
          transition: 0.2s ease;
        }
      `;
    case "secondary":
      return css`
        background-color: white;
        color: #2081e2;
        border: 2px solid #e5e8eb;
        &:hover {
          box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px;
          transition: 0.2s ease;
        }
      `;
    default:
      return css`
        background-color: #2081e2;
        color: white;
      `;
  }
};

const Container = styled.button`
  background-color: #2081e2;
  height: 60px;
  border: none;
  color: white;
  padding: 17px 24px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;

  ${({ size }) => getButtonSize(size)};

  ${({ type }) => getButtonType(type)}
`;

const Button = ({ type, size, children, ...props }) => {
  return (
    <Container type={type} size={size} {...props}>
      {children}
    </Container>
  );
};

export default Button;
