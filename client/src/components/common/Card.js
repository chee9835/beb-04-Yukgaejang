import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 379px;
  border: 1px solid #e5e8eb;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 15px;
    transition: 0.2s ease;
  }

  .image {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 199px;

    border-bottom: 1px solid #e5e8eb;
  }

  .name {
    text-align: center;
    font-weight: 500;
    margin: ${({ author }) => (author ? "30px 0" : "47px 0")};
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
    margin: 20px;
    font-weight: 300;
  }

  .profile-image-wrapper {
    width: 44px;
    height: 44px;
    position: absolute;
    top: calc(50% - 14px);
    left: calc(50% - 14px);
    border: 1px solid #e5e8eb;
    padding: 2px;
    border-radius: 50%;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: black;
  }
`;

const Card = ({ image, profileImage, name, author, description }) => {
  return (
    <Container author={author}>
      <div className="image">{image}</div>
      <div className="name">{name}</div>
      {author && (
        <div className="author-wrapper">
          by <span className="author">{author}</span>
        </div>
      )}
      <div className="description-wrapper">
        <span className="description">{description}</span>
      </div>
      <div className="profile-image-wrapper">
        <div className="profile-image" />
      </div>
    </Container>
  );
};

export default Card;
