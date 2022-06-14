import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 379px;
  height: 384px;
  border: 1px solid #e5e8eb;
  border-radius: 10px;
  position: relative;

  .image {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 199px;
    border-bottom: 1px solid #e5e8eb;

    background: linear-gradient(
      to right,
      transparent 25%,
      #e8e8e8 50%,
      transparent 100%
    );

    // 스켈레톤 애니메이션
  }

  .profile-image-wrapper {
    width: 44px;
    height: 44px;
    position: absolute;
    top: calc(50% - 14px);
    left: calc(50% - 22px);
    border: 1px solid #e5e8eb;
    border-radius: 50%;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
  }
`;

const CardSkeleton = () => {
  return (
    <Container>
      <div className="image" />
      <div className="profile-image-wrapper">
        <div className="profile-image" />
      </div>
    </Container>
  );
};

export default CardSkeleton;
