import React from "react";
import styled from "styled-components";

const Container = styled.textarea`
  height: 130px;

  ::placeholder {
    font-weight: 500;
    color: #bdc2c6;
  }
`;

const Textarea = ({ ...props }) => {
  return <Container {...props} />;
};

export default Textarea;
