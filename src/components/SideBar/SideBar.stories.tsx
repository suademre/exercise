import { Meta, StoryFn } from "@storybook/react/*";
import SideBar, { ISideBar } from ".";
import {
  SideBarMenuProvider,
  useSideBarMenuContext,
} from "../../context/SideBarMenuContext";
import Icon from "../Icon";

export default {
  title: "Components/SideBar",
  component: SideBar,
} as Meta;

const SideBarWithState = (args: ISideBar) => {
  const { showMenu, toggleShowMenu } = useSideBarMenuContext();

  return (
    <>
      <Icon name="menu" onClick={toggleShowMenu} color="orange" />
      {showMenu && <SideBar {...args}>{args.children}</SideBar>}
    </>
  );
};

const Template: StoryFn<ISideBar> = (args) => (
  <SideBarMenuProvider>
    <SideBarWithState {...args} />
  </SideBarMenuProvider>
);

// Hikaye varyasyonlarını tanımlayın
export const Default = Template.bind({});
Default.args = {
  children: <div>Your content here</div>,
};
