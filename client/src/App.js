import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Web3 from "web3";
import { web3Actions } from "./store/web3Slice";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { themeActions } from "./store/themeSlice";
import Test from "./pages/Test";
import ModalWallet from "./components/ModalWallet";

const App = () => {
  const web3 = useSelector((state) => state.web3.web3);
  const themeMode = useSelector((state) => state.theme.themeMode);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!window.ethereum) return;

    try {
      const web = new Web3(window.ethereum);
      dispatch(web3Actions.setWeb3(web));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  console.log(`web3: ${web3}`);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      dispatch(themeActions.setThemeMode("dark"));
      localStorage.setItem("darkMode", true);
    }
  }, [dispatch]);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  }

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header openModal={openModal}/>
      {modal ? <ModalWallet/> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
