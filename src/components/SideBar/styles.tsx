import styled, { css } from "styled-components";
import { ISideBar } from ".";

export const Wrapper = styled.div<Pick<ISideBar, "showMenu">>`
  width: 200px;
  height: 80%;
  background-color: rgba(151, 151, 151, 0.6);
  position: absolute;
  z-index: 10;
  padding: 50px;
  bottom: 0;
  left: -100%;
  transition: 0.5s;
  ${({ showMenu }) =>
    showMenu &&
    css`
      left: 0;
    `}
`;
