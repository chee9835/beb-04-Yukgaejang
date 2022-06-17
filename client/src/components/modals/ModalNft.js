import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { SiHiveBlockchain } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { shortenAddress, shortenDescription } from "../../lib/utils";
import { createPortal } from "react-dom";
import palette from "../../styles/palette";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  position: fixed;
  top: 10%;
  width: 100%;
  height: 100%;
  padding: 40px 0;
  max-width: 1000px;
  z-index: 998;
  background-color: white;
  gap: 20px;
  box-shadow: rgb(4 17 29 / 25%) 2 2 8px 2;
  border-radius: 10px;

  .contents {
    display: flex;
    padding: 0 70px;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nft-img-wrapper {
    display: flex;
    flex-direction: column;
    width: 340px;
    border: 1px solid #e3e6e9;
    border-radius: 10px;
  }

  .nft-img-header {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    border-bottom: 1px solid #e3e6e9;
    background-color: ${palette.primary};
    color: white;
    border-radius: 10px 10px 0 0;
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
    word-wrap: break-word;
    text-align: center;
    font-weight: 500;
    margin-bottom: 30px 0;
    font-size: 40px;
    margin-bottom: 30px;
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
    font-size: 20px;
    color: #04112b;
    padding: 10px;
    font-weight: 500;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 225px;
    color: #04112b;
  }

  .description-header {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
  }

  .description-text-wrapper {
    padding: 20px 10px;
  }

  @media screen and (min-width: 720px) {
    top: 20%;
    left: 20%;
    bottom: 10%;
    width: 900px;
    height: 450px;

    .contents {
      flex-direction: row;
    }

    .nft-img-wrapper {
      min-height: 350px;
    }

    .nft-img {
      max-height: 300px;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #1a1b1e;

      .nft-img-header {
        background-color: #26292e;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      .name {
        color: white;
      }

      .description-title {
        color: white;
      }

      .description-wrapper {
        color: white;
      }

      .nft-img-wrapper {
        border: 1px solid #05111d;
      }

      .nft-img-header {
        border-bottom: 1px solid #05111d;
      }
    `}
`;

const ModalNft = ({ imageUrl, name, author, description, setModalOpen }) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  return createPortal(
    <>
      <Background onClick={closeModal} />
      <Container onClick={closeModal}>
        <div className="contents">
          <div className="nft-img-wrapper">
            <div className="nft-img-header">
              <div className="nft-img-header-left">
                <SiHiveBlockchain style={{ transform: "rotate(90deg)" }} />
              </div>
              <FiHeart className="nft-img-header-right" />
            </div>
            <img className="nft-img" src={imageUrl} alt="" />
          </div>
          <div className="nft-contents-wrapper">
            <p className="name">{name}</p>
            <div className="author-wrapper">
              by <span className="author">{shortenAddress(author)}</span>
            </div>
            <div className="description-wrapper">
              <div className="description-header">
                <AiOutlineAlignLeft />
                <div className="description-title">Description</div>
              </div>
              <div className="description-text-wrapper">
                <span className="description-text">
                  {shortenDescription(description)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>,
    document.getElementById("modal-portal")
  );
};

export default ModalNft;
