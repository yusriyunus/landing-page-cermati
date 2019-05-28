import styled from "styled-components";

const Content = styled.div`
  position: absolute;
  top: ${props => (props.show ? [props.top] + "px" : 0)};
  transition: top ease 0.3s;
`;

export { Content };
