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
import ModalNavBar from "./components/ModalNavBar";
import ModalLogin from "./components/ModalLogin";
import ModalWallet from "./components/ModalWallet";
import { ethers } from "ethers";
import { metaMaskActions } from "./store/metaMaskSlice";
import Add from "./pages/Add";
import ThemeButton from "./components/ThemeButton";

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const menuModalOpen = useSelector((state) => state.modal.menuModalOpen);
  const loginModalOpen = useSelector((state) => state.modal.loginModalOpen);
  const walletModalOpen = useSelector((state) => state.modal.walletModalOpen);

  const dispatch = useDispatch();

  // 다크모드 버튼 클릭
  const onClickToggleTheme = () => {
    dispatch(themeActions.toggleThemeMode());
    if (themeMode === "light") localStorage.setItem("darkMode", true);
    if (themeMode === "dark") localStorage.removeItem("darkMode");
  };

  // web3 객체 연결 & 메타마스크 로그인 확인
  useEffect(() => {
    if (!window.ethereum) return;

    const web3 = new Web3(
      "https://ropsten.infura.io/v3/dbb2298855e3436fb8ee3b408fc46f1b"
    );
    dispatch(web3Actions.setWeb3(web3));

    const checkMetaMask = async () => {
      var provider = new ethers.providers.Web3Provider(window.ethereum);

      const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();

        return accounts.length > 0 ? true : false;
      };

      const isLoggedIn = await isMetaMaskConnected();

      if (isLoggedIn) {
        const metaMaskAddress = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(metaMaskAddress[0]);

        const wei = await web3.eth.getBalance(metaMaskAddress[0]);

        const balance = web3.utils.fromWei(wei, "ether");
        console.log(balance);

        dispatch(metaMaskActions.setMetaMaskAddress(metaMaskAddress[0]));
        dispatch(metaMaskActions.setBalance(balance));
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
      window.ethereum.on("accountsChanged", async () => {
        const metaMaskAddress = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        dispatch(metaMaskActions.setMetaMaskAddress(metaMaskAddress[0]));

        window.location.reload();
      });
    }
    listenMMAccount();
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      {menuModalOpen && <ModalNavBar />}
      {walletModalOpen && <ModalWallet />}
      {loginModalOpen && <ModalLogin />}
      <ThemeButton themeMode={themeMode} onClick={onClickToggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/nftpage" element={<Nftpage />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
