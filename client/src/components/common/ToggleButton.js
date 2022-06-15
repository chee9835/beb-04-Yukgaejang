import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 48px;
  height: 24px;
  background-color: #8a939b;
  border-radius: 100px;
  position: relative;

  .toggle-button {
    appearance: none;
    width: 100%;
  }

  .slider {
    position: absolute;
    top: 5px;
    left: 6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
  }

  // 토글 애니메이션 구현
`;

const ToggleButton = ({ ...props }) => {
  return (
    <Container>
      <input className="toggle-button" type="checkbox" {...props} />
      <div className="slider" />
    </Container>
  );
};

export default ToggleButton;
