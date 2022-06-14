import React, {useState} from "react";
import Textarea from "../components/common/Textarea";
import Input from "../components/common/Input";
import ImgInput from "../components/common/ImgInput";
import Button from "../components/common/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  margin: 0 50px;

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

`
const Create = () => {
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    return (
        <>
            <Container>
                <div className='container-paper'>
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
                            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100
                            MB
                        </p>
                        <ImgInput />
                    </div>
                    <div className="content-wrapper">
                        <span className="content-title">
                            Name
                        </span>
                        <span className="required">*</span>
                        <p className="content-description"/>
                        <Input placeholder="Item name"/>
                    </div>
                    <div className="content-wrapper">
                        <span className="content-title">
                            Description
                        </span>
                        <p className="content-description">
                            The description will be included on the item's detail page underneath its image. Markdown
                            syntax is supported.
                        </p>
                        <Textarea placeholder="Provide a detailed description of your item"/>
                    </div>

                    <br />
                    <Button className='button'>Create</Button>
                </div>
            </Container>
        </>
    );
};

export default Create;
