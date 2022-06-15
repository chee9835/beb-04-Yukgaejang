import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 45px;
  border-radius: 10px;
  border: 1px solid ${({ type }) => (type === "search" ? "#4c505c" : "#e5e8eb")};
  padding: ${({ type }) => (type === "search" ? "0 10px" : "0")};

  &:focus-within {
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease;
  }

  input {
    background-color: white;
    border: none;
    padding-left: 10px;
    font-weight: 300;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    font-family: Poppins, sans-serif;
    outline: none;

    ::placeholder {
      font-weight: 500;
      color: #bdc2c6;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      border: 2px solid #4c505c;

      &:hover {
        border: 2px solid #e5e8eb;
        transition: 0.5s ease;
      }

      input {
        color: white;
        background-color: #05111d;
      }

      ${({ type }) =>
        type === "common" &&
        css`
          border: none;

          input {
            background-color: #35383f;

            &:hover {
              background-color: #4c505c;
              border: none;
            }
          }

          &:hover {
            border: none;
          }
        `}
    `}

  ${({ validated }) =>
    !validated &&
    css`
      border: 1px solid red;

      &:hover {
        border: 1px solid red;
      }
    `};
`;

const Input = ({
  type,
  value,
  width,
  placeholder,
  validated = true,
  ...props
}) => {
  return (
    <Container validated={validated} type={type} width={width}>
      {type === "search" && <AiOutlineSearch size={"25px"} color={"#707A83"} />}
      <input placeholder={placeholder} {...props} />
      {value && <MdClose size={"25px"} color={"#707A83"} />}
    </Container>
  );
};

export default Input;
