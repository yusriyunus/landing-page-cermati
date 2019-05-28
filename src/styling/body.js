import styled from "styled-components";
import { device } from "./deviceSize";

const Body = styled.div`
  background-color: #e5e5e5;
  width: 100vw;
  .title {
    max-width: 600px;
    margin: auto;
    p {
      margin: 0;
      text-align: center;
    }
  }
`;

const BoxWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    padding: 100px 30px;
    max-width: 1366px;
    margin: auto;
  }
`;

const Box = styled.div`
  position: relative;
  border: 1px solid #b4b4b4;
  box-sizing: border-box;
  margin: 15px;
  padding: 10px;
  svg {
    position: absolute;
    right: 20px;
    color: #adaaa8;
  }
  @media ${device.tablet} {
    flex-basis: calc((100% / 2) - 30px);
  }
  @media ${device.laptop} {
    flex-basis: calc((100% / 3) - 30px);
  }
`;

export { Body, BoxWrapper, Box };
