import React, { useState } from "react";
import Textarea from "../components/common/Textarea";
import Input from "../components/common/Input";
import ImgInput from "../components/common/ImgInput";
import Button from "../components/common/Button";
import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { create } from "ipfs-http-client";
import nftABI from "../lib/abis/mint_ABI.json";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 100px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  .container-paper {
    display: flex;
    flex-direction: column;
  }

  .heading-wrapper {
    padding: 40px 0;
  }

  .heading {
    font-size: 40px;
    color: #04111d;
    font-weight: 600;
  }

  .required {
    color: red;
    padding: 0 2px;
  }

  .validation-check {
    color: #e95656;
    padding: 10px;
    text-shadow: 0.1px 0.1px 0.1px whitesmoke;
  }

  .content-wrapper {
    padding: 10px 0;
    max-width: 900px;
  }

  .content-title {
    font-size: 20px;
    font-weight: 500;
    text-shadow: 0.3px 0.3px 0.3px gray;
    color: #35383f;
  }

  .content-description {
    font-size: 15px;
    color: #6f7982;
    text-shadow: 0.3px 0.3px 0.3px gray;
    padding: 10px 0;
    line-height: 20px;
  }

  .button {
    width: 100px;
  }

  @media screen and (min-width: 1500px) {
    margin-top: 50px;
    padding: 0 20%;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .heading {
        color: white;
      }

      .content-title {
        color: white;
      }
    `}
`;

const Create = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, updateFileUrl] = useState(``);
  const [validated, setValidated] = useState(true);

  const client = create("https://ipfs.infura.io:5001/api/v0");
  const web3 = useSelector((state) => state.web3.web3);
  const metaMaskAddress = useSelector((state => state.metaMask.metaMaskAddress))

  async function getImageUri(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function getNFTUri() {
    let metadata = {
      name: name,
      description: description,
      image: fileUrl,
    };

    metadata = JSON.stringify(metadata);

    try {
      const added = await client.add(metadata);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log(metaMaskAddress)
      await mintNFT(url);
    } catch (e) {
      console.log(e);
    }
  }




  async function mintNFT(NFTUri) {
    try {
      console.log(NFTUri);
      const abi = nftABI;
      const address = "0x37264b70cCc8804a6555ad9d196389Cf524DA050";
      web3.eth.Contract.setProvider(
        "https://ropsten.infura.io/v3/6f134bd85c204246857c0eb8b36b18f5"
      );

      window.contract = new web3.eth.Contract(abi, address);
      const transactionParameters = {
        to: address, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods.mintNFT(metaMaskAddress, NFTUri).encodeABI(), //make call to NFT smart contract
      };
      //sign transaction via Metamask
      try {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        });
        setImg("");
        setName("");
        setDescription("");
        return {
          success: true,
          status:
            "✅ Check out your transaction on Etherscan: https://robsten.etherscan.io/tx/" +
            txHash,
        };
      } catch (error) {
        return {
          success: false,
          status: "😥 Something went wrong: " + error.message,
        };
      }
    } catch (e) {
      console.log(e);
    }
  }

  const validate = () => {
    if (name === "") {
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const onChangeImageInput = (event) => {
    const files = event.target.files;
    const fileUrl = URL.createObjectURL(files[0]);
    setImg(fileUrl);

    console.log(fileUrl);
    getImageUri(event).then();
  };

  return (
    <>
      <Container>
        <div className="container-paper">
          <div className="heading-wrapper">
            <h1 className="heading">Create New Item</h1>
          </div>
          <div className="content-wrapper">
            <span className="required">*</span>
            <span className="content-description">Required fields</span>
          </div>
          <div className="content-wrapper">
            <span className="content-title">
              Image, Video, Audio, or 3D Model
            </span>
            <span className="required">*</span>
            <p className="content-description">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
            <ImgInput img={img} onChange={onChangeImageInput} />
          </div>
          <div className="content-wrapper">
            <span className="content-title">Name</span>
            <span className="required">*</span>
            <p className="content-description" />
            <Input
              type="common"
              placeholder="Item name"
              onChange={(e) => setName(e.target.value)}
              validated={validated}
              onBlur={validate}
            />
            {!validated ? (
              <p className="validation-check">
                <AiOutlineClose />
                This field is required.
              </p>
            ) : null}
          </div>
          <div className="content-wrapper">
            <span className="content-title">Description</span>
            <p className="content-description">
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </p>
            <Textarea
              placeholder="Provide a detailed description of your item"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <Button
            className="button"
            disabled={img === "" || name === ""}
            onClick={getNFTUri}
          >
            Create
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Create;
