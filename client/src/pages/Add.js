import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import nftABI from "../lib/abis/explore_ABI.json";
import { useSelector } from "react-redux";


const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 40px;

  .contents {
    width: 720px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .label {
    font-size: 20px;
    font-weight: 500;
  }

  @media screen and (min-width: 720px) {
    padding: 100px;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: #202225;
      color: white;
    `}
`;

const Add = () => {
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");
  const web3 = useSelector((state) => state.web3.web3);



  const onChangeTokenId = (event) => {
    setTokenId(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onReset = () => {
    setTokenId('');
    setPrice('');
  };

  const buttonDisabled =  tokenId === "" || price === "";

  async function addNFT(){
    try {
      const abi = nftABI;
      const address = "0x2bCC3383B4113ec9d77f243df7C41C237da8a68B";
      web3.eth.Contract.setProvider(
          "https://ropsten.infura.io/v3/6f134bd85c204246857c0eb8b36b18f5"
      );

      window.contract = new web3.eth.Contract(abi, address);
      const transactionParameters = {
        to: address, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods.createMarketItem("0x37264b70cCc8804a6555ad9d196389Cf524DA050",tokenId, price).encodeABI(), //make call to NFT smart contract
      };
      //sign transaction via Metamask
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });


    } catch (e) {
      console.log(e);
    }
    onReset()
    // eslint-disable-next-line no-restricted-globals
    location.reload();


  }
  return (
    <Container>
      <div className="contents">
        <p className="title">Add tokens to Market</p>
        <label className="label">Token ID</label>
        <Input
          onChange={onChangeTokenId}
          value={tokenId}
          type="common"
          placeholder="token ID"
        />
        <label className="label">Price</label>
        <Input
          onChange={onChangePrice}
          value={price}
          type="common"
          placeholder="price"
        />
        <Button type="primary" disabled={buttonDisabled} onClick={addNFT}>
          Send
        </Button>
      </div>
    </Container>
  );
};

export default Add;
