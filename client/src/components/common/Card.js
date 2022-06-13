import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

const Card = () => {
  return (
    <Container>
      <div className="image" />
      <div className="contents"></div>
    </Container>
  );
};

export default Card;
