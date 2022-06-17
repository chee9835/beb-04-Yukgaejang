export const shortenAddress = (address) => {
  if (address.length > 25) {
    return `${address.slice(0, 25)}...`;
  } else {
    return address;
  }
};

export const shortenDescription = (description) => {
  if (description.length > 70) {
    return `${description.slice(0, 70)}...`;
  } else {
    return description;
  }
};

export const parseAddress = (metaMaskAddress) => {
  if (metaMaskAddress === "") return "";
  else {
    return (
      metaMaskAddress.slice(0, 7) +
      "..." +
      metaMaskAddress.slice(metaMaskAddress.length - 4, metaMaskAddress.length)
    );
  }
};

export const showBalance = (balance) => {
  if (balance === "") return "$0.00 USD";
  else {
    return balance;
  }
};
