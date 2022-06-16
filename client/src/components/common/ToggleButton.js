import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  cursor: pointer;

  .input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  // 배경
  .slider {
    position: absolute;
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;

    &:hover {
      background-color: #4c505c;
    }
  }

  // 움직이는 버튼
  .slider:before {
    position: absolute;
    border-radius: 50%;
    content: "";
    height: 14px;
    width: 14px;
    left: 6px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
  }

  .input:checked + .slider {
    background-color: ${palette.primary};
  }

  .input:checked + .slider:before {
    transform: translateX(22px);
  }
`;

const ToggleButton = ({ ...props }) => {
  return (
    <Container>
      <input className="input" type="checkbox" {...props} />
      <span className="slider" />
    </Container>
  );
};

export default ToggleButton;
