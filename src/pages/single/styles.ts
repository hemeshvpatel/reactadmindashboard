import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  .singleContainer {
    flex: 6;

    .top {
      padding: 20px;
      display: flex;
      gap: 20px;

      .left {
        flex: 1;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
        padding: 20px;
        position: relative;

        .editButton {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px;
          font-size: 12px;
          color: rebeccapurple;
          background-color: #ae9fd0;
          cursor: pointer;
        }

        .item {
          display: flex;
          gap: 20px;

          .itemImage {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }

          .details {
            .itemTitle {
              margin-bottom: 10px;
              color: #555;
            }

            .detailItem {
              margin-bottom: 10px;
              font-size: 14px;

              .itemKey {
                font-weight: bold;
                color: gray;
                margin-right: 5px;
              }

              .itemValue {
                font-weight: 300;
              }
            }
          }
        }
      }

      .right {
        flex: 2;
      }
    }

    .bottom {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 10px 20px;
    }

    .title {
      font-size: 16px;
      color: lightgrey;
      margin-bottom: 20px;
    }
  }
`;
