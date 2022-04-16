import React from "react";

//components
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar.";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import TransactionsTable from "../../components/table/Table";

//styles
import * as Styled from "./styles";

const Home = () => {
  return (
    <Styled.Home>
      <SideBar />
      <Styled.Container>
        <NavBar />
        <Styled.Widgets>
          <Widget type={"users"} />
          <Widget type={"orders"} />
          <Widget type={"earnings"} />
          <Widget type={"balance"} />
        </Styled.Widgets>
        <Styled.Charts>
          <FeaturedChart />
          <Chart />
        </Styled.Charts>
        <Styled.Table>
          <div className="title">Latest Transactions</div>
          <TransactionsTable />
        </Styled.Table>
      </Styled.Container>
    </Styled.Home>
  );
};

export default Home;
