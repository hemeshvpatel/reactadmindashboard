import React from "react";

//components
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar.";
import DataTable from "../../components/dataTable/DataTable";

//styles
import * as Styled from "./styles";

const List = () => {
  return (
    <Styled.Container>
      <SideBar />
      <div className="tableContainer">
        <NavBar />
        <DataTable />
      </div>
    </Styled.Container>
  );
};

export default List;
