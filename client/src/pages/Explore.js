import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Card from "../components/common/Card";
import CardSkeleton from "../components/skeletons/CardSkeleton";

const FAKE_ARRAY = Array(6).fill(0);

const DESCRIPTION_PLACEHOLDER =
  'Autoglyphs are the first "on-chain generative art on the Ethereum blockchain. A completely self-con...';

const Container = styled.section`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .heading-wrapper {
    padding: 50px 0;
  }

  .heading {
    font-size: 40px;
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
    grid-template-columns: 1fr;
    padding: 40px;
    justify-items: center;
    gap: 20px;
  }

  .loading {
    width: 100%;
    height: 600px;
    background-color: gray;
  }

  .observer {
    border: 3px solid black;
    display: ${({ showObserver }) => (showObserver ? "default" : "none")};
  }

  @media screen and (min-width: 720px) {
    .contents {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .tab-menu {
        border-bottom: 1px solid #151b22;
      }
    `}
`;
//여긴 그냥 크립토 펑크 가져오기
//DB 구축
const Explore = () => {
  const [fakeArray, setFakeArray] = useState(FAKE_ARRAY);
  const [loading, setLoading] = useState(false);
  const [showObserver, setShowObserver] = useState(true);

  const targetRef = useRef();

  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      if (!targetRef?.current) return;

      if (entries[0].isIntersecting) {
        const newFakeArray = Array(6).fill(0);

        setLoading(true);
        setShowObserver(false);

        setTimeout(() => {
          setFakeArray((fakeArray) => [...fakeArray, ...newFakeArray]);
          setLoading(false);
          setShowObserver(true);
        }, 3000);
      }
    });
  }, []);

  useEffect(() => {
    if (!targetRef?.current) return;

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return (
    <Container showObserver={showObserver}>
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
        {fakeArray.map((_, index) => (
          <Card
            key={index}
            name="Autoglyphs"
            description={DESCRIPTION_PLACEHOLDER}
            author="NeoHuntersSolana"
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

export default Explore;
