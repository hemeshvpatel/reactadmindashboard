import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  .newContainer {
    flex: 6;

    .top,
    .bottom {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 20px;
      display: flex;

      .title {
        color: lightgrey;
        font-size: 20px;
      }

      .left {
        flex: 1;
        text-align: center;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      .right {
        flex: 2;

        form {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: space-around;

          .formInput {
            width: 40%;

            label {
              display: flex;
              align-items: center;
              gap: 10px;
              cursor: pointer;
            }

            input {
              width: 100%;
              padding: 5px;
              border: none;
              border-bottom: 1px solid gray;
            }
          }

          button {
            width: 150px;
            padding: 10px;
            border: none;
            background-color: teal;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
          }
        }
      }
    }
  }
`;
