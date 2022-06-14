import React from "react";
import styled from "styled-components";
import {RiAccountCircleLine} from "react-icons/ri";

const Container = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #424c55;
  .icon {
    &:hover {
      color: #0c1822;
    }
  }
`;

const AccountButton = () => {

  const onClickAccount = () => {

  };

  return <Container onClick={onClickAccount}>
    <RiAccountCircleLine className='icon' size={'35px'} />
  </Container>;
};

export default AccountButton;
