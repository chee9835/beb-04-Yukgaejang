import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Button from "./components/common/Button";
import Header from "./components/Header";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import { metaMaskActions } from "./store/metaMaskSlice";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkMetaMask = async () => {
      if (typeof window.ethereum !== "undefined") {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const metaMaskAddress = res[0];
        console.log(metaMaskAddress);

        if (metaMaskAddress) {
          dispatch(metaMaskActions.setMetaMaskAddress(metaMaskAddress));
        }
      }
    };

    checkMetaMask();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Button type="primary">Explore</Button>
      <Button type="secondary">Create</Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
