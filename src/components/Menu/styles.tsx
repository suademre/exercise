import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, font } from "../../theme/variables";

export const LinkContainer = styled.div`
  margin: 20px 0;
`;
export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: ${font.size.medium};
  color: ${colors.black};
  font-weight: bold;
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
