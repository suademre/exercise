import React from "react";
import { Wrapper } from "./styles";
import Icon from "../Icon";
import { useSideBarMenuContext } from "../../context/SideBarMenuContext";

export interface ISideBar {
  children: React.ReactNode;
  showMenu?: boolean;
}

const SideBar = ({ children }: ISideBar) => {
  const { showMenu, toggleShowMenu } = useSideBarMenuContext();
  return (
    <div>
      <Wrapper showMenu={showMenu}>
        <Icon
          name="close"
          color="orange"
          margin="0 0 0 auto"
          onClick={() => toggleShowMenu()}
        />
        {children}
      </Wrapper>
    </div>
  );
};

export default SideBar;
