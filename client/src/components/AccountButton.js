import React from "react";
import styled from "styled-components";
import {RiAccountCircleLine} from "react-icons/ri";
import {Link} from "react-router-dom";

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
    return (
        <Container>
            <Link to="/login">
                <RiAccountCircleLine className='icon' size={'35px'}/>
            </Link>
        </Container>
);
};

export default AccountButton;
