import React from "react";
import styled, { css } from "styled-components";

const Container = styled.footer`
  color: white;

  .footer-sub {
    padding-top: 100px;
    height: 220px;
    background-color: #2081e2;
  }

  .footer-main {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #1868b7;
    padding: 0 20px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 500px;
    padding: 40px 20px;
    border-bottom: 1px solid rgba(229, 232, 235, 0.25);
  }

  .open-sea {
    text-align: center;
  }

  .open-sea-text {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .open-sea-description {
    line-height: 1.6;
  }

  .links-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .contributors-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .contributors {
    font-weight: 600;
    margin-bottom: 15px;
  }

  .name {
    color: white;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: white;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 1200px) {
    .footer-sub {
      height: 100px;
    }

    .footer-main {
      height: 100vh;
      padding: 0 150px;
    }

    .contents {
      flex-direction: row;
      gap: 400px;
      padding: 100px 0 0;
    }

    .open-sea {
      text-align: left;
      width: 500px;
    }

    .contributors-section {
      align-items: flex-start;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .footer-sub {
        background-color: #191e23;
      }
      .footer-main {
        background-color: #05111d;
      }
    `}
`;

const Footer = () => {
  return (
    <Container>
      <div className="footer-sub"></div>
      <div className="footer-main">
        <div className="contents">
          <div className="open-sea">
            <p className="open-sea-text">OpenSea</p>
            <p className="open-sea-description">
              The world's first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className="contributors-section">
            <p className="contributors">Contributors</p>
            <a
              className="name"
              href="https://github.com/codeMonkey-shin"
              rel="noreferrer"
              target="_blank"
            >
              신동욱
            </a>
            <a
              className="name"
              href="https://github.com/hongildong2"
              rel="noreferrer"
              target="_blank"
            >
              유승준
            </a>
            <a
              className="name"
              href="https://github.com/chee9835"
              rel="noreferrer"
              target="_blank"
            >
              채희수
            </a>
            <a
              className="name"
              href="https://github.com/NONONCRUST"
              rel="noreferrer"
              target="_blank"
            >
              신상호
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
