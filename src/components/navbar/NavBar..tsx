import React from "react";
import * as styled from "./styles";

const NavBar = () => {
  return (
    <styled.container>
      <styled.wrapper>
        <div className={"search"}>
          <input type={"text"} placeholder={"Search..."} />
          ICON
        </div>
        <div className={"items"}>
          <div className={"item"}>
            <div className={"icon"} /># English
          </div>
          <div className={"item"}>
            <div className={"icon"} />#
          </div>
          <div className={"item"}>
            <div className={"icon"} />#
          </div>
          <div className={"item"}>
            <div className={"icon"} />#
          </div>
          <div className={"item"}>
            <div className={"icon"} />#
          </div>
          <div className={"item"}>
            <img
              src={"../src/assets/chewyAvatar"}
              alt={""}
              className={"avatar"}
            />
          </div>
        </div>
      </styled.wrapper>
    </styled.container>
  );
};

export default NavBar;
