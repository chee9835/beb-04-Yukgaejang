export const parseAddress = (address) => {
  if (address.length > 25) {
    return `${address.slice(0, 25)}...`;
  } else {
    return address;
  }
};

export const parseDescription = (description) => {
  if (description.length > 70) {
    return `${description.slice(0, 70)}...`;
  } else {
    return description;
  }
};
