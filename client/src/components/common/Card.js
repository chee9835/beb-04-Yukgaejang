import React, { useState } from "react";
import styled, { css } from "styled-components";
import { shortenAddress, shortenDescription } from "../../lib/utils";
import ModalNft from "../modals/ModalNft";

const Container = styled.div`
  width: 340px;
  border: 1px solid #e5e8eb;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0 2px 15px;
    transition: 0.2s ease;
  }

  .nft-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 199px;
    border-bottom: 1px solid #e5e8eb;
    overflow: hidden;
  }

  .nft-image {
    width: 100%;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    height: 210px;
  }

  .name {
    text-align: center;
    font-weight: 500;
    margin: ${({ author }) => (author ? "30px 0 10px" : "40px 0")};
    font-size: 16px;
  }

  .author-wrapper {
    display: flex;
    justify-content: center;
    color: #707a83;
  }

  .author {
    color: #2081e2;
    margin-left: 7px;
  }

  .description-wrapper {
    color: #353840;
    text-align: center;
    line-height: 1.4;
    font-weight: 300;
    margin-top: 30px;
    padding: 0 40px;
  }

  .profile-image-wrapper {
    width: 44px;
    height: 44px;
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 22px);
    border: 1px solid #e5e8eb;
    padding: 2px;
    border-radius: 50%;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
  }

  @media screen and (min-width: 720px) {
    width: 379px;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #303339;
      border: 1px solid #151b22;

      .nft-image-wrapper {
        border-bottom: 1px solid #151b22;
      }

      .description-wrapper {
        color: #e5e8eb;
      }
    `}
`;

const Card = ({ imageUrl, name, author, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickCard = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Container author={author} onClick={onClickCard}>
        <div className="nft-image-wrapper">
          <img className="nft-image" src={imageUrl} alt="" />
        </div>
        <div className="card-contents">
          <div className="name">{name}</div>
          {author && (
            <div className="author-wrapper">
              by <span className="author">{shortenAddress(author)}</span>
            </div>
          )}
          <div className="description-wrapper">
            <span className="description">
              {shortenDescription(description)}
            </span>
          </div>
        </div>
        <div className="profile-image-wrapper">
          <img className="profile-image" src={imageUrl} alt="" />
        </div>
      </Container>
      {modalOpen && (
        <ModalNft
          imageUrl={imageUrl}
          name={name}
          author={author}
          description={description}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default Card;
