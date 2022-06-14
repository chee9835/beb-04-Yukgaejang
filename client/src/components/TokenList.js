import React from "react";
import Erc721 from "./Erc721";

const TokenList = ({ web3, account, erc721List }) => {
  return (
    <div className="token-list">
      <Erc721 web3={web3} account={account} erc721List={erc721List} />
    </div>
  );
};

export default TokenList;
