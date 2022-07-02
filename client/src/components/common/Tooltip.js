import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  border-radius: 10px;
  background-color: #05111d;
  color: white;
  font-size: 16px;
  font-weight: 600;
  max-width: 500px;
  text-align: center;

  .tip {
    position: absolute;
    top: calc(100% - 5px);
    width: 10px;
    height: 10px;
    background-color: #05111d;
    transform: rotate(45deg);
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #4c505c;

      .tip {
        background-color: #4c505c;
      }
    `}
`;

const Tooltip = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
      <div className="tip" />
    </Container>
  );
};

export default Tooltip;
