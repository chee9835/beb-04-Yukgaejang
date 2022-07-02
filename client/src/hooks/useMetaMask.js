import { useDispatch } from "react-redux";
import { metaMaskActions } from "../store/metaMaskSlice";

const useMetaMask = () => {
  const dispatch = useDispatch();

  const loginWithMetaMask = async () => {
    if (!window.ethereum) return;

    const res = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const metaMaskAddress = res[0];

    if (!metaMaskAddress) return;

    dispatch(metaMaskActions.setMetaMaskAddress(metaMaskAddress));
  };

  return { loginWithMetaMask };
};

export default useMetaMask;
