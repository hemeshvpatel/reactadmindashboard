//components
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar.";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

//styles
import * as Styled from "./styles";

const Single = () => {
  return (
    <Styled.Container>
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/chewyAvatar.png" alt="" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">Chewbacca</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">chewy@therepublic.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1-123-444-5566</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">
                    12, Rose district, Planet Tattoine
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Mimban</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3} title={"User Spending (Last 6 Months)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </Styled.Container>
  );
};

export default Single;
