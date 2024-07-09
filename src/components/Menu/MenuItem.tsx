import React from "react";
import { LinkContainer, StyledLink } from "./styles";
import { useSideBarMenuContext } from "../../context/SideBarMenuContext";

export interface IMenuItem {
  title: string;
  slug: string;
}

const MenuItem = ({ title, slug }: IMenuItem) => {
  const { toggleShowMenu } = useSideBarMenuContext();
  return (
    <div>
      <LinkContainer>
        <StyledLink onClick={toggleShowMenu} to={`/categories/${slug}`}>
          {title}
        </StyledLink>
      </LinkContainer>
    </div>
  );
};

export default MenuItem;
