import { createContext, useContext, useState } from "react";

type SideBarMenuContextType = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  toggleShowMenu: () => void;
};

type SideBarMenuProviderType = {
  children: React.ReactNode;
};

const defaultSideBarMenuContet: SideBarMenuContextType = {
  showMenu: false,
  setShowMenu: () => {},
  toggleShowMenu: () => {},
};

const SideBarMenuContext = createContext<SideBarMenuContextType>(
  defaultSideBarMenuContet
);

const useSideBarMenuContext = () => {
  return useContext(SideBarMenuContext);
};

const SideBarMenuProvider = ({ children }: SideBarMenuProviderType) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <SideBarMenuContext.Provider
      value={{ showMenu, setShowMenu, toggleShowMenu }}
    >
      {children}
    </SideBarMenuContext.Provider>
  );
};

export { SideBarMenuProvider, useSideBarMenuContext };
