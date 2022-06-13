import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
<<<<<<<<< Temporary merge branch 1
=========
import Button from "./components/common/Button";
import Header from "./components/Header";
>>>>>>>>> Temporary merge branch 2
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import { metaMaskActions } from "./store/metaMaskSlice";
import Web3 from "web3";
import { web3Actions } from "./store/web3Slice";

const App = () => {
  const web3 = useSelector((state) => state.web3.web3);

  console.log(web3);

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

        try {
          const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
          dispatch(web3Actions.setWeb3(web));
        } catch (err) {
          console.log(err);
        }
      }
    };

    checkMetaMask();
  }, [dispatch]);

  return (
    <>
<<<<<<<<< Temporary merge branch 1
=========
      <Header />
      <Button type="primary">Explore</Button>
      <Button type="secondary">Create</Button>
>>>>>>>>> Temporary merge branch 2
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
