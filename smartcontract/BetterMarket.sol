// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";

contract marketPlaceBoilerPlate is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds;
  Counters.Counter private _itemsSold;

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  struct MarketItem {
    uint256 itemId;
    address nftContract;
    uint256 tokenId;
    string tokenURI;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  mapping(uint256 => MarketItem) private idToMarketItem;

  event MarketItemCreated(
    uint256 indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    string name,
    string symbol,
    string tokenURI,
    address seller,
    address owner,
    uint256 price,
    bool sold
  );

  event MarketItemSold(uint256 indexed itemId, address owner);

  //   function mintToMarket(address nftContract) public payable noReentrant {
  //     uint256 itemId = _itemIds.current();
  //     uint256 tokenId = IERC721(nftContract).mintNFT(msg.sender, address(this));
  //     string tokenURI = IERC721(nftContract).tokenURI(tokenId);

  //   } mintNFT나 tokenURI가 IERC721에 없는데 이게 되나??, 발행하는건 IERC721을 이용해서는 안될것 같다. 발행결과를 이 컨트랙트로 끌어와야된다.
  //IERC721Metadata 를 이용하면 가져올 수 있나?

  function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price
  ) public payable nonReentrant {
    require(price > 0, "Price must be greater than 0");

    _itemIds.increment();
    uint256 itemId = _itemIds.current();
    string memory tokenURI = IERC721Metadata(nftContract).tokenURI(tokenId);
    string memory name = IERC721Metadata(nftContract).name();
    string memory symbol = IERC721Metadata(nftContract).symbol();
    //토큰URI가져와서 마켓아이템에넣기
    idToMarketItem[itemId] = MarketItem(
      itemId,
      nftContract,
      tokenId,
      name,
      symbol,
      tokenURI,
      payable(msg.sender),
      payable(address(0)),
      price, //토큰 유알아이도 추가
      false
    );
    //프론트엔드에서 이 Contract Address에 Approve를 해야됨.
    //setApprovedForAll(마켓어드레스, 1), 프론트엔드에서 넣기!

    IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    emit MarketItemCreated(
      itemId,
      nftContract,
      tokenId,
      name,
      symbol,
      tokenURI,
      msg.sender,
      address(0),
      price,
      false
    );
  }

  function createMarketSale(address nftContract, uint256 itemId)
    public
    payable
    nonReentrant
  {
    uint256 price = idToMarketItem[itemId].price;
    uint256 tokenId = idToMarketItem[itemId].tokenId;
    bool sold = idToMarketItem[itemId].sold;
    require(
      msg.value == price,
      "Please submit the asking price in order to complete the purchase"
    );
    require(sold != true, "This Sale has alredy finnished");
    emit MarketItemSold(itemId, msg.sender);

    idToMarketItem[itemId].seller.transfer(msg.value);
    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
    idToMarketItem[itemId].owner = payable(msg.sender);
    _itemsSold.increment();
    idToMarketItem[itemId].sold = true;
  }

  function fetchMarketItems() public view returns (MarketItem[] memory) {
    uint256 itemCount = _itemIds.current();
    uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
    uint256 currentIndex = 0;

    MarketItem[] memory items = new MarketItem[](unsoldItemCount);
    for (uint256 i = 0; i < itemCount; i++) {
      if (idToMarketItem[i + 1].owner == address(0)) {
        uint256 currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  //fetch my items
  /* Returns only items that a user has purchased */
  function fetchMyNFTs() public view returns (MarketItem[] memory) {
    uint256 totalItemCount = _tokenIds.current();
    uint256 itemCount = 0;
    uint256 currentIndex = 0;

    for (uint256 i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint256 i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        uint256 currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }
  
  //SaleProceedings MarketItem.sold로 확인하고 Withdraw 
}

/// Thanks for inspiration: https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/
