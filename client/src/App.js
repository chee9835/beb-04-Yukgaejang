import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Web3 from "web3";
import { web3Actions } from "./store/web3Slice";
import Login from "./pages/Login";

const App = () => {
  const web3 = useSelector((state) => state.web3.web3);

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

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
