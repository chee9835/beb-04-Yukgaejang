import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Mypage from "./pages/Mypage";
import Home from "./pages/Home";
import Web3 from "web3";
import { web3Actions } from "./store/web3Slice";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { themeActions } from "./store/themeSlice";
import Test from "./pages/Test";

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  const dispatch = useDispatch();

  // web3 객체
  useEffect(() => {
    if (!window.ethereum) return;

    try {
      const web = new Web3(
        "https://ropsten.infura.io/v3/dbb2298855e3436fb8ee3b408fc46f1b"
      );
      dispatch(web3Actions.setWeb3(web));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // 다크모드
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      dispatch(themeActions.setThemeMode("dark"));
      localStorage.setItem("darkMode", true);
    }
  }, [dispatch]);

  // 메타마스크 쿠키
  // useEffect(() => {
  //   const metaMaskCookie = document.cookie("metamask");
  //   if (metaMaskCookie) {
  //     dispatch(metaMaskActions.setMetaMaskAddress(metaMaskCookie));
  //   }
  // }, [dispatch]);

  // 메타마스크 잔액
  // useEffect(() => {
  //   const getBalance = async () => {
  //     try {
  //       if (metaMaskAddress !== "") {
  //         const balance = await web3.eth.getBalance(metaMaskAddress);
  //         dispatch(metaMaskActions.setBalance(balance));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getBalance();
  // }, [metaMaskAddress, web3.eth, dispatch]);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
