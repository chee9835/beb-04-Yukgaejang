import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import abi from "../lib/abis/explore_ABI.json";
import { CONTRACT_ADDRESS } from "../lib/contractAddress";
import axios from "axios";
import { shortenAddress } from "../lib/utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .heading-wrapper {
    width: 340px;
  }

  .heading {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
  }

  .description {
    color: #353840;
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
  }

  .buttons-wrapper {
    display: flex;
    gap: 20px;
    margin-bottom: 60px;
  }

  .button {
    width: 120px;
  }

  .learn-more-wrapper {
    display: none;
  }

  .learn-more {
    color: #2081e2;
    font-weight: 600;
  }

  .play-circle {
    color: #2081e2;
  }

  .mobile-learn-more-wrapper {
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    &:hover {
      color: #1868b7;
    }
  }

  @media screen and (min-width: 720px) {
    flex-direction: row;
    padding: 40px 0;
    gap: 60px;

    .title {
      gap: 30px;
      width: 36.25rem;
      align-items: flex-start;
    }

    .heading-wrapper {
      width: 100%;
    }

    .heading {
      font-size: 45px;
      text-align: left;
    }

    .description-wrapper {
      width: 400px;
    }

    .description {
      color: #353840;
      font-size: 24px;
      line-height: 1.6;
      text-align: left;
    }

    .buttons-wrapper {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
    }

    .button {
      width: 167px;
    }

    .learn-more-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }

    .learn-more {
      color: #2081e2;
      font-weight: 600;

      &:hover {
        color: #1868b7;
      }
    }

    .play-circle {
      color: #2081e2;
    }

    .mobile-learn-more-wrapper {
      display: none;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .description {
        color: #8a939b;
      }
    `}
`;

const Home = () => {
  const [nft, setNft] = useState({});

  const bottomRef = useRef();

  const web3 = useSelector((state) => state.web3.web3);

  const onClickLearnMore = () => {
    bottomRef?.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  // 데이터 페칭
  useEffect(() => {
    if (!web3) return;
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

    const getMarketNFTs = async () => {
      const nfts = await contract.methods.fetchMarketItems().call();
      const targetNft = nfts[10];

      const response = await axios.get(targetNft.tokenURI);
      const tokenMetadata = response.data;

      const nftObject = {
        owner: targetNft.seller,
        name: tokenMetadata.name,
        imageUrl: tokenMetadata.image,
      };
      setNft(nftObject);
    };
    getMarketNFTs();
  }, [web3]);

  return (
    <>
      <Container>
        <div className="title">
          <div className="heading-wrapper">
            <h1 className="heading">
              Discover, collect, and sell extraordinary NFTs
            </h1>
          </div>
          <div className="description-wrapper">
            <p className="description">
              OpenSea is the world's first and largest NFT marketplace
            </p>
          </div>
          <div className="buttons-wrapper">
            <Link to="/explore">
              <Button className="button" type="primary">
                Explore
              </Button>
            </Link>
            <Link to="/create">
              <Button className="button" type="secondary">
                Create
              </Button>
            </Link>
          </div>
          <div className="learn-more-wrapper" onClick={onClickLearnMore}>
            <AiFillPlayCircle className="play-circle" size={"20px"} />
            <div className="learn-more">Learn more about OpenSea</div>
          </div>
        </div>
        <HomeCard
          owner={nft?.owner && shortenAddress(nft.owner)}
          name={nft?.name}
          imageUrl={nft?.imageUrl}
        />
        <div className="mobile-learn-more-wrapper" onClick={onClickLearnMore}>
          <AiFillPlayCircle className="play-circle" size={"20px"} />
          <div className="learn-more">Learn more about OpenSea</div>
        </div>
      </Container>
      <Footer />
      <div className="scroll-to-bottom" ref={bottomRef} />
    </>
  );
};

export default Home;
