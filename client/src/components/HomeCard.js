import React from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Container = styled.div`
  width: 355px;
  height: 419px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 30%) 0 2px 15px;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(0 0 0 / 30%) 0 2px 50px;
    transition: 0.2s ease;
  }

  .image {
    height: 299px;
    background-color: gray;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .contents {
    display: flex;
    justify-content: space-between;
    height: 74px;
    align-items: center;
    font-size: 14px;
    padding: 20px;
  }

  .profile-image-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .profile-image {
    width: 40px;
    height: 40px;
    background-color: gray;
    border-radius: 50%;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .name {
    font-weight: 600;
  }

  .author {
    color: #2081e2;
    font-weight: 500;
  }

  .info-icon {
    color: gray;
    &:hover {
      color: black;
      transition: 0.2s ease;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 550px;
    height: 493px;

    .image {
      height: 419px;
    }
  }
`;

const HomeCard = () => {
  return (
    <Container>
      <div className="image" />
      <div className="contents">
        <div className="profile-image-text-wrapper">
          <div className="profile-image" />
          <div className="text-wrapper">
            <p className="name">Summer Night Story</p>
            <p className="author">tako_redpands</p>
          </div>
        </div>
        <AiOutlineInfoCircle className="info-icon" size="24px" />
      </div>
    </Container>
  );
};

export default HomeCard;
