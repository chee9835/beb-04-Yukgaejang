import React, { useState } from "react";
import { useSelector } from "react-redux";
import TokenList from "../components/TokenList";
import useNFT from "../hooks/useNFT";

const Create = () => {
    const [newErc721addr, setNewErc721Addr] = useState();

    const web3 = useSelector((state) => state.web3.web3);
    const metaMaskAddress = useSelector(
        (state) => state.metaMask.metaMaskAddress
    );

    const { addNewErc721Token } = useNFT({
        newErc721addr,
        erc721Abi: "ERC721ABI",
        web3,
    });

    const onChangeTextInput = (event) => {
        setNewErc721Addr(event.target.value);
    };

    return (
        <>
            <div className="newErc721">
                <input type="text" onChange={onChangeTextInput} />
            </div>
            <button onClick={addNewErc721Token}>Add New erc721</button>
            <TokenList web3={web3} account={metaMaskAddress} />;
        </>
    );
};

export default Create;
