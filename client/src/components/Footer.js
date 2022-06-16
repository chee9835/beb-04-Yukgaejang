import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  color: white;

  .footer-sub {
    padding-top: 100px;
    height: 220px;
    background-color: #2081e2;
  }

  .footer-main {
    height: 500px;
    background-color: #1868b7;
    padding: 0 20px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 80%;
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

  .footer-bottom {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 30px;
    gap: 20px;
    align-items: center;
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
      height: 500px;
      padding: 0 150px;
    }

    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
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
            <p className="name">contributor 1</p>
            <p className="name">contributor 2</p>
            <p className="name">contributor 3</p>
            <p className="name">contributor 4</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2018 - 2022 Ozone Networks, Inc</p>
          <div className="links-wrapper">
            <p className="link">Privacy Policy</p>
            <p className="link">Terms of Service</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
