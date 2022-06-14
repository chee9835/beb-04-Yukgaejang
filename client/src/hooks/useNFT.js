import { useState } from "react";

// newErc721addr: the address of the smart contract to call
// erc721Abi: json interface for the contract to instantiate
// web3: web3 object
const useNFT = ({ newErc721addr, erc721Abi, web3 }) => {
  // 자신의 NFT 정보를 저장하는 토큰
  const [erc721List, setErc721List] = useState([]);

  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr);

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    const arr = Array(totalSupply)
      .fill(null)
      .map((_, index) => index + 1);

    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();

      // ACCOUNT??
      if (String(tokenOwner).toLowerCase() === "ACCOUNT") {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721List((Erc721List) => [
          ...Erc721List,
          { name, symbol, tokenId, tokenURI },
        ]);
      }
    }

    return erc721List;
  };

  return { addNewErc721Token };
};

export default useNFT;
