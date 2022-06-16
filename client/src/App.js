import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Mypage from "./pages/Mypage";
import Nftpage from "./pages/Nftpage";
import Home from "./pages/Home";
import Web3 from "web3";
import { web3Actions } from "./store/web3Slice";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { themeActions } from "./store/themeSlice";
import Test from "./pages/Test";
import ModalLogin from "./components/ModalLogin";
import ModalWallet from "./components/ModalWallet";
import ModalNavBar from "./components/ModalNavBar";
import { ethers } from "ethers";
import { metaMaskActions } from "./store/metaMaskSlice";

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  const dispatch = useDispatch();

  // web3 객체 연결
  useEffect(() => {
    if (!window.ethereum) return;

    try {
      const web = new Web3(
        "https://ropsten.infura.io/v3/dbb2298855e3436fb8ee3b408fc46f1b"
      );
      dispatch(web3Actions.setWeb3(web));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  // 메타마스크 로그인 확인
  useEffect(() => {
    if (!window.ethereum) return;

    const checkMetaMask = async () => {
      var provider = new ethers.providers.Web3Provider(window.ethereum);

      const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();

        return accounts.length > 0 ? true : false;
      };

      const isLoggedIn = await isMetaMaskConnected();

      if (isLoggedIn) {
        const metaMaskAccounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(metaMaskAccounts);

        dispatch(metaMaskActions.setMetaMaskAddress(metaMaskAccounts[0]));
      }
    };

    checkMetaMask();
  }, [dispatch]);

  // 다크모드
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      dispatch(themeActions.setThemeMode("dark"));
      localStorage.setItem("darkMode", true);
    }
  }, [dispatch]);

  // 계정 변경 감지
  useEffect(() => {
    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function () {
        // Time to reload your interface with accounts[0]!
        const metamaskAccounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("잔액");
        console.log(window.ethereum.getBalance(metamaskAccounts[0]));
        // accounts = await web3.eth.getAccounts();
        window.location.reload();
      });
    }
    listenMMAccount();
  }, []);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <div>{}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/nftpage" element={<Nftpage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
