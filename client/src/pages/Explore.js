import React from "react";
import styled from "styled-components";
import Card from "../components/common/Card";

const DESCRIPTION_PLACEHOLDER =
  'Autoglyphs are the first "on-chain generative art on the Ethereum blockchain. A completely self-con...';

const Container = styled.section`
  .heading-wrapper {
    padding: 50px 0;
  }

  .heading {
    font-size: 40px;
    color: #04111d;
    text-align: center;
    font-weight: 600;
  }

  .contents {
    display: grid;
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
    grid-template-columns: 1fr 1fr 1fr;
    padding: 40px;
    gap: 20px;
  }

  @media screen and (max-width: 500px) {
    .contents {
      grid-template-columns: 1fr;
    }
  }
`;

const Explore = () => {
  return (
    <Container>
      <div className="header" />
      <div className="heading-wrapper">
        <h1 className="heading">Explore Collections</h1>
      </div>
      <div className="tab-menu">
        <div className="tab-wrapper">
          <span className="tab-text">Trending</span>
          <div className="tab-underline" />
        </div>
      </div>
      <div className="contents">
        <Card
          name="Autoglyphs"
          description={DESCRIPTION_PLACEHOLDER}
          author="NeoHuntersSolana"
        />
        <Card name="Autoglyphs" description={DESCRIPTION_PLACEHOLDER} />
        <Card name="Autoglyphs" description={DESCRIPTION_PLACEHOLDER} />
        <Card name="Autoglyphs" description={DESCRIPTION_PLACEHOLDER} />
        <Card name="Autoglyphs" description={DESCRIPTION_PLACEHOLDER} />
        <Card name="Autoglyphs" description={DESCRIPTION_PLACEHOLDER} />
      </div>
    </Container>
  );
};

export default Explore;
