import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, font } from "../../theme/variables";

export const Container = styled.div`
  position: absolute;
  width: 75%;
  left: 50%;
  top: 20px;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 200px;
  height: 100%;
  background-color: rgba(151, 151, 151, 0.6);
  position: absolute;
  z-index: 10;
  padding: 50px;
`;
export const LinkContainer = styled.div`
  margin: 20px 0;
`;
export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: ${font.size.medium};
  color: ${colors.black};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
