import React from "react";
import { Link } from "react-router-dom";

//mui
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";

//data
import { userColumns, userRows } from "../../datatablesource";

//styles
import * as Styled from "./styles";

const DataTable = () => {
  const handleDelete = (id: number) => {
    console.log("delete");
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Styled.Container>
      <div className="dataTableTitle">
        Add New User
        <Link to={"/users/new"} className={"link"}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Styled.Container>
  );
};

export default DataTable;
