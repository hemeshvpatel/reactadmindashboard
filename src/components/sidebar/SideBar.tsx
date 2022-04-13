import React from "react";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import * as styled from "./styles";

const SideBar = () => {
  return (
    <styled.container>
      <styled.top>
        <span className={"logo"}>logo</span>
      </styled.top>
      <hr />
      <styled.center>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className={"icon"} />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <div className={"icon"} />
            <span>Users</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Products</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Orders</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <div className={"icon"} />
            <span>Stats</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <div className={"icon"} />
            <span>System Health</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Logs</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <div className={"icon"} />
            <span>Profile</span>
          </li>
          <li>
            <div className={"icon"} />
            <span>Logout</span>
          </li>
        </ul>
      </styled.center>
      <styled.bottom>
        <div className={"colorOption"} />
        <div className={"colorOption"} />
      </styled.bottom>
    </styled.container>
  );
};

export default SideBar;
