import React from "react";
import styled from "styled-components";
import {AiFillPicture} from "react-icons/ai";

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

    &:hover {
      background-color: #d6d6d6;
      cursor: pointer;
    }
  }
  .imgInput {
    display: none;
  }
`;

const ImgInput = () => {

    const ImgHandler = () => {
        console.log("이미지");

    }

    return (
        <Container>
            <div className="container-inner" onClick={ImgHandler}>
                <AiFillPicture size={"70px"} color={"#707A83"}/>
                <input type="file" className='imgInput' />
            </div>
        </Container>
    );
};

export default ImgInput;
