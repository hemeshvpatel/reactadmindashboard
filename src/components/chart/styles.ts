import styled, { css } from "styled-components";

export const container = styled.div`
  flex: 4;
  //html-css-js.com/css/generator/box-shadow
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: gray;

  .title {
    margin-bottom: 20px;
  }

  .chartGrid {
    stroke: lightslategray;
  }
`;
