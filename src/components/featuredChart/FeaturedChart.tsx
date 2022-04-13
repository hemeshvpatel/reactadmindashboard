import React from "react";

//react-circular-progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

//styles
import * as styled from "./styles";

const FeaturedChart = () => {
  return (
    <styled.container>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize={"small"} />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize={"small"} />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize={"small"} />
              <div className="resultAmount">$5.1k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize={"small"} />
              <div className="resultAmount">$2.5k</div>
            </div>
          </div>
        </div>
      </div>
    </styled.container>
  );
};

export default FeaturedChart;
