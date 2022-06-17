# MarketPlace, NFT SmartContract 

Reference : 
https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb

https://blog.chain.link/how-to-build-an-nft-marketplace-with-hardhat-and-solidity/

https://github.com/ethereum-boilerplate/ethereum-nft-marketplace-boilerplate/blob/main/src/contracts/marketplaceBoilerplate.sol

스마트컨트랙트입니다

## BetterMarket.sol

```solidity
  struct MarketItem {
    uint256 itemId;
    address nftContract;
    uint256 tokenId;
    string name;
    string symbol;
    string tokenURI;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }
```

마켓 컨트랙트에 저장하는 데이터들입니다. 사용자가 마켓에 NFT를 등록하면 상기 구조로 마켓 컨트랙트에 기록됩니다.

itemId는 마켓에서 NFT에 대해 매기는 번호이며 tokenId는 NFT의 컨트랙트인 address nftContract내의 tokenId입니다.

```solidity
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
    
    idToMarketItem[itemId] = MarketItem(
      itemId,
      ...
      msg.sender,
      adress(0),
      ...
    );

    IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    emit MarketItemCreated(
      itemId,
      ...
    );
  }
  ```
  마켓에 NFT를 등록하는 함수입니다. 입력으로는 해당 NFT의 컨트랙트 주소, 토큰아이디, 가격을 입력 받습니다.
  
  이 함수가 정상적으로 동작하려면 NFT컨트랙트의 오너가 마켓 컨트랙트에 대해 접근 권한을 부여해야합니다.
  
  특이 사항으로는 MarketItem.seller를 msg.sender로, owner를 address(0)으로 지정합니다.
  
  msg.sender의 주소는 createMarketItem을 실행한 사람이 아닌 마켓 컨트랙트의 주소입니다. 마켓 컨트랙트 내에서 인터페이스를 통해 실행했기 때문입니다. owner는 address(0)으로 지정되지만 마켓 컨트랙트가 해당 NFT에 대해 접근 권한이 있기 때문에 거래성사시 구매자의 주소로 다시 변경이 가능합니다.
  
  다른 함수로는 createMarketSale, fethchMarketItems, fetchMyNFTs 함수가 있습니다.
  
  각각 마켓의 거래를 성사, 마켓의 모든 NFT를 리턴, 마켓에 있는 NFT중 나의 것을 리턴 하는 함수 입니다.
  
         
  
  
  
