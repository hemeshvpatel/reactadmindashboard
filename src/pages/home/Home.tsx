import React from "react";
import * as styled from "./styles";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar.";

const Home = () => {
  return (
    <styled.home>
      <SideBar />
      <styled.container>
        <NavBar /> home container
      </styled.container>
    </styled.home>
  );
};

export default Home;
