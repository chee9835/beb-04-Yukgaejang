import React, { useState } from "react";

const fakeErc721 = {
  name: "name",
  symbol: "symbol",
  id: "id",
  address: "address",
  tokenId: "tokenId",
  tokenURI: "tokenURI",
};

const Erc721 = ({ web3, account, erc721List = [fakeErc721] }) => {
  const [to, setTo] = useState("");

  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract("erc721Abi", tokenAddr, {
      from: account,
    });

    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({ from: account })
      .on("receipt", (receipt) => {
        setTo("");
      });
  };

  const onChangeTextInput = (event) => {
    setTo(event.target.value);
  };

  return erc721List.map((token) => (
    <div key={token.id} className="erc721token">
      Name: <span className="name">{token.name}</span>(
      <span className="symbol">{token.symbol}</span>)
      <div className="nft">id: {token.tokenId}</div>
      <img src={token.tokenURI} width={300} alt="token img" />
      <div className="token-transfer">
        To: <input type="text" value={to} onChange={onChangeTextInput} />
        <button
          className="sendErc20Btn"
          onClick={() => sendToken.bind(this, token.address, token.tokenId)}
        >
          Send Token
        </button>
      </div>
    </div>
  ));
};

export default Erc721;
