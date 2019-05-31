import styled from "styled-components";
import { device } from "./deviceSize";
import hero from "../asset/hero.jpg";

const Hero = styled.div`
  @media ${device.mobileS} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-image: url(${hero});
    background-color: #004a75;
    background-blend-mode: overlay;
    width: 100vw;
    height: 700px;
    text-align: center;
    color: white;

    .logo {
      position: absolute;
      top: 20px;
      left: 30px;
      width: 60px;
      height: auto;
    }

    div {
      z-index: 3;
    }

    .content_1 {
      font-size: 35px;
      line-height: 10px;
      font-weight: 300;
    }

    .content_2 {
      font-size: 24px;
      line-height: 30px;
      font-weight: 500;
      margin: 12px;
    }

    .content_3 {
      margin : auto;
      text-align : center
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      max-width: 300px;
    }

    button {
      background: none;
      color: white;
      border: 1.2px solid white;
      width: 200px;
      height: 50px;
      cursor: pointer;
      font-weight: 600;
      margin : 20px;
    }

    button:hover {
      background: white;
      color: #007bc1;
    }
  }

  @media ${device.tablet}{
    .content_3{
      max-width: 400px;

    }
  }
`;

export { Hero };
