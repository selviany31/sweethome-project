import styled from "styled-components";

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
  .left {
    font-weight: bold;
    font-size: 14px;
    color: #000000;
    width: 70%;
  }

  .right {
    font-weight: bold;
    font-size: 14px;
    color: #000000;
    width: 30%;

    .notes {
      font-size: 14px;
      color: #373737;
      font-weight: normal;
    }
  }
`;
