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

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  const dispatch = useDispatch();

  // web3 객체
  useEffect(() => {
    if (!window.ethereum) return;

    var provider = new ethers.providers.Web3Provider(window.ethereum);

    const isMetaMaskConnected = async () => {
      const accounts = await provider.listAccounts();
      console.log("Receiving accounts");
      console.log(accounts);
      return accounts.length > 0;
    };

    isMetaMaskConnected().then((connected) => {
      if (connected) {
        //metamask is connected
        console.log("로그인됨");

        try {
          const web = new Web3(
            "https://ropsten.infura.io/v3/dbb2298855e3436fb8ee3b408fc46f1b"
          );
          console.log("@@@ web3 object created @@@");
          console.log(web);
          dispatch(web3Actions.setWeb3(web));
        } catch (err) {
          console.log(err);
        }
      } else {
        //metamask is not connected
      }
    });
  }, [dispatch]);

  // 다크모드
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      dispatch(themeActions.setThemeMode("dark"));
      localStorage.setItem("darkMode", true);
    }
  }, [dispatch]);

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
