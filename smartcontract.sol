// no license
pragma solidity ^0.8.7;

//RemixIDE에서 ABI,Bytecode만 뽑아오기

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract YGJ is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory _name, string memory _symbol) public
        ERC721(_name,_symbol)
        {}


    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns(uint256) {
        _tokenIds.increment();
         
        uint256 newItemId = _tokenIds.current();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    // function buy {
    //     //buyer is meg.sender
    //     //check that seller is tokenowner

    // }


    // function sell {
        
    // }

}