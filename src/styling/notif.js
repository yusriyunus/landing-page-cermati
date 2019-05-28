import styled from "styled-components";
import { device } from "./deviceSize";

const NotifWrapper = styled.div`
  @media ${device.mobileS} {
    background-color: #e5e5e5;
    position: fixed;
    top: ${props => (props.show ? 0 : "-100%")};
    width: 100vw;
    z-index: 9999;
    transition: top ease 2s;
    div {
      margin: 10px;
    }
    p {
      margin: 10px 0;
      max-width: 600px;
    }
    a {
      text-decoration: none;
    }
    button {
      background-color: #007bc1;
      border: none;
      color: white;
      width: 80px;
      height: 40px;
      cursor: pointer;
    }
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    p {
      margin: 0;
    }
    div {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      max-width: 720px;
    }
  }
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
  }
`;

export { NotifWrapper };
