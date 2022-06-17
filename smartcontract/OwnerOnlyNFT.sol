// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract cozNFTs is ERC721URIStorage, ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
  {
    setApprovalForAll(
      address(0x2bCC3383B4113ec9d77f243df7C41C237da8a68B),
      true
    );
    //trusted Market Address 미안합니다 너무 힘들어서 이렇게 했습니다.
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  function mintNFT(address recipient, string memory tokenURI)
    public
    onlyOwner
    returns (uint256)
  {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);
    _approve(recipient, newItemId);

    return newItemId;
  }

  function mintMeNFT(string memory tokenURI) public onlyOwner returns (uint256) {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);

    return newItemId;
  }
}
