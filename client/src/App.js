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
import ModalNavBar from "./components/modals/ModalNavBar";
import ModalLogin from "./components/modals/ModalLogin";
import ModalWallet from "./components/modals/ModalWallet";
import ModalNft from "./components/modals/ModalNft";
import { ethers } from "ethers";
import { metaMaskActions } from "./store/metaMaskSlice";
import Add from "./pages/Add";
import ThemeButton from "./components/buttons/ThemeButton";
import Modal from "./components/common/Modal";
const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const menuModalOpen = useSelector((state) => state.modal.menuModalOpen);
  const loginModalOpen = useSelector((state) => state.modal.loginModalOpen);
  const walletModalOpen = useSelector((state) => state.modal.walletModalOpen);
  const nftModalOpen = useSelector((state) => state.modal.nftModalOpen);

  const dispatch = useDispatch();

  const onClickThemeButton = () => {
    dispatch(themeActions.toggleThemeMode());
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
    const listenMMAccount = () => {
      window.ethereum.on("accountsChanged", async () => {
        window.location.reload();
      });
    };
    listenMMAccount();
  }, []);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {/*<Modal />*/}
      <Header />
      {menuModalOpen && <ModalNavBar />}
      {walletModalOpen && <ModalWallet />}
      {loginModalOpen && <ModalLogin />}
      {nftModalOpen && <ModalNft />}
      <div id="modal-portal" />
      <ThemeButton themeMode={themeMode} onClick={onClickThemeButton} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
