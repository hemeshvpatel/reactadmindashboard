import React from "react";
import * as styled from "./styles";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar.";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <styled.home>
      <SideBar />
      <styled.container>
        <NavBar />
        <styled.widgets>
          <Widget type={"users"} />
          <Widget type={"orders"} />
          <Widget type={"earnings"} />
          <Widget type={"balance"} />
        </styled.widgets>
        <styled.charts>
          <FeaturedChart />
          <Chart />
        </styled.charts>
      </styled.container>
    </styled.home>
  );
};

export default Home;
