import React, { useRef } from "react";
import styled from "styled-components";
import { AiFillPicture } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 250px;
  border: 5px dotted #cacaca;
  border-radius: 10px;

  .container-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 230px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #d6d6d6;
      cursor: pointer;
    }
  }
  .imgInput {
    display: none;
  }

  .img {
    position: absolute;
    width: 100%;
    z-index: 999;
  }
`;

const ImgInput = ({ onChange, img }) => {
  const selectFile = useRef("");

  return (
    <Container>
      <div
        className="container-inner"
        onClick={() => selectFile.current.click()}
      >
        <AiFillPicture size={"70px"} color={"#707A83"} />
        <input
          type="file"
          className="imgInput"
          accept="image/*"
          ref={selectFile}
          onChange={(e) => onChange(e)}
        />
        {img && <img className="img" src={img} alt="" />}
      </div>
    </Container>
  );
};

export default ImgInput;
