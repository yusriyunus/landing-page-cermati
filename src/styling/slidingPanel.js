import styled from "styled-components";
import { device } from "./deviceSize";

const PanelWrapper = styled.div`
  background: rgba(0, 123, 193, 0.9);
  padding: 20px;
  color: white;
  position: fixed;
  bottom: ${props => (props.panel ? 0 : "-100%")};
  max-width: 500px;
  transition: bottom ease 2s;

  .close {
    font-size: 28px;
    transform: rotate(45deg);
    float: right;
    margin: 0;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  input,
  button {
    box-sizing: border-box;
    width: 100%;
    margin: 5px 0;
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
