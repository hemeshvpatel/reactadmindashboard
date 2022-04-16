import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  //html-css-js.com/css/generator/box-shadow
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  height: 100px;

  .left,
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-weight: bold;
      font-size: 14px;
      color: dimgrey;
    }

    .counter {
      font-size: 28px;
      font-weight: 300;
    }

    .link {
      width: max-content;
      font-size: 12px;
      border-bottom: 1px solid gray;
    }

    .percentage {
      display: flex;
      align-items: center;
      font-size: 14px;

      &.positive {
        color: green;
      }

      &.negative {
        color: red;
      }
    }

    .icon {
      font-size: 28px;
      padding: 5px;
      border-radius: 5px;
      align-self: flex-end;
    }
  }
`;
