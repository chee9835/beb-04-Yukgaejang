import React from "react";
import styled from "styled-components";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const metaMaskAddress = useSelector(
    (state) => state.metaMask.metaMaskAddress
  );

  return (
    <Container>
      <Link to={metaMaskAddress === "" ? "/login" : "/mypage"}>
        <RiAccountCircleLine className="icon" size={"30px"} />
      </Link>
    </Container>
  );
};

export default AccountButton;
