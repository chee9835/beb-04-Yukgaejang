import React, { useEffect, useMemo, useRef, useState } from "react";
import CardSkeleton from "../components/skeletons/CardSkeleton";
import styled, { css } from "styled-components";
import Card from "../components/common/Card";
import abi from "../lib/abis/explore_ABI.json";
import axios from "axios";
import Web3 from "web3";
import { FaEthereum } from "react-icons/fa";
import { useSelector } from "react-redux";
import { parseAddress } from "../lib/utils";

const Container = styled.section`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .mypage-legend {
    position: relative;
    height: 125px;
    background-color: #f7f8f9;
  }

  .mypage-profile-image-wrapper {
    background-color: white;
    position: absolute;
    width: 90px;
    height: 90px;
    border: 1px solid gray;
    bottom: -20px;
    left: 16px;
    border-radius: 50%;
  }

  .mypage-profile-image {
    width: 100%;
  }

  .icons-wrapper {
    height: 70px;
  }

  .profile-info-wrapper {
    height: 140px;
    padding: 0 16px;
  }

  .name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .balance-wrapper {
    display: flex;
    margin-bottom: 50px;
  }

  .balance {
    font-size: 16px;
    color: #353840;
    font-weight: 300;
  }

  .collected {
    font-size: 18px;
    font-weight: 500;
  }

  .contents {
    display: grid;
  }

  .no-item {
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
  }

  .tab-menu {
    display: flex;
    justify-content: center;
    height: 50px;
    border-bottom: 1px solid #e5e8eb;
  }

  .tab-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tab-text {
    font-weight: 500;
    text-align: center;
    font-size: 16px;
  }

  .tab-underline {
    width: 112px;
    height: 4px;
    border-radius: 2px;
    background-color: #2081e2;
  }

  .contents {
    display: grid;
    grid-template-columns: 1fr;
    padding: 40px;
    padding-bottom: 300px;
    justify-items: center;
    gap: 20px;
  }

  .loading {
    width: 100%;
    height: 600px;
    background-color: gray;
  }

  .observer {
    width: 100%;
    height: 1px;
    display: ${({ showObserver }) => (showObserver ? "default" : "none")};
  }

  @media screen and (min-width: 720px) {
    .mypage-legend {
      height: 320px;
    }

    .mypage-profile-image-wrapper {
      width: 168px;
      height: 168px;
      left: 64px;
    }

    .profile-info-wrapper {
      padding: 0 64px;
    }

    .contents {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .no-item {
      font-size: 28px;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .tab-menu {
        border-bottom: 1px solid #151b22;
      }

      .mypage-legend {
        background-color: #262b2f;
      }

      .balance {
        color: white;
      }
    `}
`;

const Mypage = () => {
  const [loading, setLoading] = useState(false);
  const [showObserver, setShowObserver] = useState(true);
  const [marketArray, setMarketArray] = useState([]);
  const [metaMaskWeb3, setMetaMaskWeb3] = useState(null);
  const [loadedArray, setLoadedArray] = useState([]);

  const metaMaskAddress = useSelector(
    (state) => state.metaMask.metaMaskAddress
  );

  // ??????????????? ??????????????? ??????
  useEffect(() => {
    if (!window.ethereum) return;

    try {
      const web = new Web3(window.ethereum);
      setMetaMaskWeb3(web);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const CONTRACT_ADDRESS = "0x2bCC3383B4113ec9d77f243df7C41C237da8a68B";

  useEffect(() => {
    if (!metaMaskWeb3?.eth?.Contract) return;

    const getMarketNFTs = async () => {
      const contract = new metaMaskWeb3.eth.Contract(abi, CONTRACT_ADDRESS);

      const nfts = await contract.methods
        .fetchMyNFTs()
        .call({ from: String(metaMaskAddress) });

      const nftArray = await Promise.all(
        nfts.map(async (nft) => {
          const response = await axios.get(nft.tokenURI);

          const tokenMetadata = response.data;

          const nftObject = {
            tokenId: nft.tokenId,
            owner: nft.seller,
            name: tokenMetadata.name,
            description: tokenMetadata.description,
            imageUrl: tokenMetadata.image,
          };

          return nftObject;
        })
      );

      setLoading(false);
      setMarketArray(nftArray);
      setLoadedArray(nftArray.splice(0, 3));
    };

    getMarketNFTs();
  }, [metaMaskAddress, metaMaskWeb3?.eth?.Contract]);

  const targetRef = useRef();

  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      if (!targetRef?.current) return;

      if (entries[0].isIntersecting) {
        setLoading(true);
        setShowObserver(false);

        const newArray = marketArray.splice(0, 3);

        if (newArray.length === 0) {
          setLoading(false);
          setShowObserver(true);
          observer.disconnect();
          return;
        }

        setTimeout(() => {
          setLoadedArray((loadedArray) => [...loadedArray, ...newArray]);
          setLoading(false);
          setShowObserver(true);
        }, 1000);
      }
    });
  }, [marketArray]);

  useEffect(() => {
    if (!targetRef?.current) return;

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return (
    <Container showObserver={showObserver}>
      <div className="mypage-legend">
        <div className="mypage-profile-image-wrapper">
          <img
            className="mypage-profile-image"
            src="/profile-image.png"
            alt=""
          />
        </div>
      </div>
      <div className="icons-wrapper"></div>
      <div className="profile-info-wrapper">
        <p className="name">Unnamed</p>
        <div className="balance-wrapper">
          <FaEthereum />
          <p className="balance">{parseAddress(metaMaskAddress)}</p>
        </div>
        <p className="collected">Collected</p>
      </div>
      <div className="header" />
      <div className="tab-menu">
        <div className="tab-wrapper">
          <span className="tab-text">My NFTs</span>
          <div className="tab-underline" />
        </div>
      </div>
      {loadedArray.length === 0 && (
        <p className="no-item">No items to display</p>
      )}
      <div className="contents">
        {loadedArray.map((token, index) => (
          <Card
            key={index}
            name={token.name}
            description={token.description}
            author={token.owner}
            imageUrl={token.imageUrl}
          />
        ))}
        {loading &&
          Array(3)
            .fill(0)
            .map((_, index) => <CardSkeleton key={index} />)}
      </div>

      <div className="observer" ref={targetRef} />
    </Container>
  );
};

export default Mypage;
