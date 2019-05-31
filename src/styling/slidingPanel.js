import styled from "styled-components";
import { device } from "./deviceSize";

const PanelWrapper = styled.div`
  background: rgba(0, 123, 193, 0.9);
  padding: 30px;
  color: white;
  position: fixed;
  width: 100vw;
  box-sizing: border-box;
  bottom: ${props => (props.panel ? 0 : "-100%")};
  transition: bottom ease 2s;
  z-index: 9999;

  p {
    max-width: 500px;
  }

  .panelTitle {
    font-size: 22px;
    font-weight: bold;
    margin: 8px 0;
  }

  .panelContent {
    font-size: 18px;
    margin: 6px 0;
    line-height: 24px;
    font-weight: 400px;
  }

  .close {
    font-size: 28px;
    transform: rotate(45deg);
    margin: 0;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 12px;
  }

  @media ${device.tablet} {
    max-width: 640px;
  }
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  input,
  button {
    box-sizing: border-box;
    width: 100%;
    margin: 5px 0;
    height: 30px;
  }

  input {
    background: white;
    border: none;
    color: grey;
  }

  button {
    background: #ff8000;
    color: white;
    border: none;
    border-radius: 2px;
  }

  @media ${device.tablet} {
    display: flex;
    input {
      flex: 1;
      margin-right: 20px;
    }
    button {
      flex-basis: 20%;
    }
  }
`;

export { PanelWrapper, InputWrapper };
