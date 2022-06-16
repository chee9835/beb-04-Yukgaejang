import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  display: flex;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  margin: 40px 20px;
  padding: 10px 10px 25px 10px;
  min-width: 300px;
  max-width: 400px;
  min-height: 200px;
  z-index: 998;
  background-color: white;
  box-shadow: rgb(4 17 29 / 25%) 2 2 8px 2;
  border-radius: 10px;

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .close-button {
    all: unset;
  }

  .contents {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .message {
    text-align: center;
    font-weight: 500;
    size: 40px;
    margin: ${({ author }) => (author ? "30px 0 10px" : "40px 0")};
    font-size: 40px;
  }
`;

const modal = () => {
  return (
    <>
      <Background />
      <ContainerWrapper>
        <Container>
          <div className="button-wrapper">
            <button className="close-button">X</button>
          </div>
          <div className="message">
            COMPLETE <br /> CREATE NFT !
          </div>
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default modal;
