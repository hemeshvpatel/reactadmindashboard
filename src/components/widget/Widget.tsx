import React from "react";

//icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

//styles
import * as Styled from "./styles";

//interfaces
export interface IWidget {
  type: string;
}

const Widget = ({ type }: IWidget) => {
  let data;

  //temporary values
  const amount = 100;
  const diff = 100;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        linkText: "View all users",
        icon: (
          <PersonOutlinedIcon
            className={"icon"}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        linkText: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className={"icon"}
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        linkText: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={"icon"}
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        linkText: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className={"icon"}
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Styled.Container>
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data?.linkText}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data?.icon}
      </div>
    </Styled.Container>
  );
};

export default Widget;
