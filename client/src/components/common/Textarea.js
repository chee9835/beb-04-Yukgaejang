import React from "react";
import styled, { css } from "styled-components";

const Container = styled.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid #e5e8eb;
  border-radius: 10px;
  outline: none;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  padding: 12px;
  line-height: 26px;

  &:focus {
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease;
  }

  ::placeholder {
    color: #bdc2c6;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #35383f;
      color: white;
      border: none;

      &:hover {
        background-color: #4c505c;
      }
    `}
`;

const Textarea = ({ ...props }) => {
  return <Container {...props} />;
};

export default Textarea;
