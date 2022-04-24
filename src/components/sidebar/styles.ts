import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid lightgray;
  min-height: 100vh;
  background-color: white;

  .hr {
    height: 0;
    border: 0.5px solid lightgray;
  }
`;

export const Logo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    font-size: 20px;
    font-weight: bold;
    color: mediumpurple;
  }
`;

export const Links = styled.div`
  padding-left: 10px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    .title {
      font-size: 10px;
      font-weight: bold;
      color: #b7b7b7;
      margin-top: 15px;
      margin-bottom: 5px;
    }

    li {
      display: flex;
      align-items: center;
      padding: 5px;
      cursor: pointer;

      &:hover {
        background-color: #f3b3ff;
      }

      .icon {
        font-size: 18px;
        color: mediumpurple;
      }

      span {
        font-size: 13px;
        font-weight: 600;
        color: #919191;
        margin-left: 10px;
      }
    }
  }
`;
