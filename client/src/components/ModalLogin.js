import React from "react";
import styled from "styled-components";

const Background = styled.section`
  position: fixed;
  display: flex;
  top: 80px; //헤더 밑에 위치
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  text-align: left;
`

const Container = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fdfdfd;
  text-decoration: none;
  border: none;
  padding: 20px;
  cursor: grab;
`


const ModalLogin = () => {
    return (
        <Background>
            <Container>
            </Container>
        </Background>
    );
};

export default ModalLogin;