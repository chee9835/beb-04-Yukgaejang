import React from "react";
import styled from "styled-components";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
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

const WalletButton = () => {

    return (
        <Container>
            <MdOutlineAccountBalanceWallet
                className='icon'
                size={'35px'} />
        </Container>
    );
};

export default WalletButton;
