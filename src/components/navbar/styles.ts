import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  border-bottom: 0.5px solid gray;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .search {
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    padding: 3px;

    input {
      border: none;
      outline: none;
      background-color: transparent;

      &::placeholder {
        font-size: px;
      }
    }
  }

  .items {
    display: flex;
    align-items: center;

    .item {
      display: flex;
      align-items: center;
      margin: 20px;
      position: relative;

      .icon {
        font-size: 20px;
      }

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      .counter {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        position: absolute;
        top: -5px;
        right: -5px;
      }
    }
  }
`;
