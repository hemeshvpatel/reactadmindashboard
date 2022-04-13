import styled from "styled-components";

export const container = styled.div`
  height: 50px;
  border-bottom: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: grey;
`;

export const wrapper = styled.div`
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
        font-size: 12px;
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

      .icon {
        font-size: 20px;
      }

      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }
`;
