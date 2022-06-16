import React from "react";
import styled, { css } from "styled-components";
import { parseAddress, parseDescription } from "../lib/utils";
import { SiHiveBlockchain } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { modalActions } from "../store/modalSlice";
import { useDispatch } from "react-redux";

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
  top: 50%;
  left: 50%;
  padding: 40px 10px;
  width: 65%;
  min-width: 360px;
  max-width: 1000px;
  min-height: 500px;
  z-index: 998;
  background-color: white;
  gap: 20px;
  box-shadow: rgb(4 17 29 / 25%) 2 2 8px 2;
  border-radius: 10px;

  .contents {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nft-img-wrapper {
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 400px;
    border: 1px solid #e3e6e9;
    border-radius: 10px;
  }

  .nft-img-header {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    border-bottom: 1px solid #e3e6e9;

    color: #6f7982;
  }

  .nft-img-header-left {
    flex: 1;
  }

  .nft-img-header-right {
    &:hover {
      color: red;
    }
  }

  .nft-img {
    object-fit: fill;
  }

  .nft-contents-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 340px;
  }

  .name {
    text-align: center;
    font-weight: 500;
    size: 50px;
    margin: ${({ author }) => (author ? "30px 0 10px" : "40px 0")};
    font-size: 40px;
  }

  .author-wrapper {
    display: flex;
    justify-content: center;
    color: #707a83;
    padding-bottom: 30px;
  }

  .author {
    color: #2081e2;
    margin-left: 7px;
  }

  .description-title {
    color: #04112b;
    padding: 10px;
    font-weight: 500;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 225px;
    border: 1px solid #e3e6e9;
    border-radius: 10px;
    color: #04112b;
    padding: 5px 0;
  }

  .description-header {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    border-bottom: 1px solid #e3e6e9;
  }

  @media screen and (min-width: 720px) {
    .contents {
      flex-direction: row;
    }
  }
`;

const ModalNft = ({ imageUrl, name, author, description }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalActions.closeNftModal());
  };

  return (
    <>
      <Background onClick={closeModal} />
      <ContainerWrapper>
        <Container>
          <div className="contents">
            <div className="nft-img-wrapper">
              <div className="nft-img-header">
                <div className="nft-img-header-left">
                  <SiHiveBlockchain style={{ transform: "rotate(90deg)" }} />
                </div>
                <FiHeart className="nft-img-header-right" />
              </div>
              <img className="nft-img" src="/open-sea-logo.png" alt="nft" />
            </div>
            <div className="nft-contents-wrapper">
              <div className="name">
                NAME
                {/*{name}*/}
              </div>
              <div className="author-wrapper">
                by{" "}
                <span className="author">
                  author
                  {/*{parseAddress(author)}*/}
                </span>
              </div>
              <div className="description-wrapper">
                <div className="description-header">
                  <AiOutlineAlignLeft />
                  <div className="description-title">Description</div>
                </div>
                <span className="description-text">
                  {/*{parseDescription(description)}*/}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default ModalNft;
