import React from "react";
import styled from "styled-components";
import ToggleButton from "../components/common/ToggleButton";
import Tooltip from "../components/common/Tooltip";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Test = () => {
  return (
    <Container>
      <ToggleButton />
      <Tooltip>random text</Tooltip>
    </Container>
  );
};

export default Test;
