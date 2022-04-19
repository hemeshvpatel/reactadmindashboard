import React, { useState } from "react";

//components
import SideBar from "../../components/sidebar/SideBar";

//styles
import * as Styled from "./styles";
import NavBar from "../../components/navbar/NavBar.";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

//ts
export interface INew {
  data: { id: number; label: string; type: string; placeholder?: string }[];
  title: string;
}

const New = ({ data, title }: INew) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <Styled.Container>
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1 className={"title"}>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "/noImage.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor={"file"}>
                  Image: <DriveFolderUploadOutlined className={"icon"} />
                </label>
                <input
                  type={"file"}
                  id={"file"}
                  onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    const uploadedImageFile = target.files?.[0];
                    setFile(uploadedImageFile || null);
                  }}
                  style={{ display: "none" }}
                />
              </div>
              {data.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default New;
