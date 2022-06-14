import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import {MdClose} from "react-icons/md";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${({width}) => (width ? `${width}px` : "100%")};
  height: 45px;
  border: 1px solid ${({ validated }) => validated ? "#e5e8eb" : "red"};
  border-radius: 10px;
  padding: ${({type}) => (type === "search" ? "0 10px" : "0 10px 0 0")};

  &:focus-within {
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease;
  }

  .input {
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
`;

const Input = ({type, value, width, placeholder, validated=true, ...props}) => {
    return (
        <Container validated={validated} type={type} width={width}>
            {type === "search" && <AiOutlineSearch size={"25px"} color={"#707A83"}/>}
            <input placeholder={placeholder} className="input" {...props} />
            {value && <MdClose size={"25px"} color={"#707A83"}/>}
        </Container>
    );
};

export default Input;
