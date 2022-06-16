import React from "react";
import styled, { css } from "styled-components";
import { parseAddress, parseDescription } from "../lib/utils";
import { SiHiveBlockchain } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .contents {
    display: flex;
    justify-items: center;
    gap: 20px;
    flex-direction: column;
  }

  .nft-img-wrapper {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
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
    width: 400px;
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
    width: 400px;
    height: 200px;
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

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .tab-menu {
        border-bottom: 1px solid #151b22;
      }
    `}
`;

const Nftpage = ({ imageUrl, name, author, description }) => {
  return (
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
  );
};

export default Nftpage;
