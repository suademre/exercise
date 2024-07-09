import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { queries } from "../../theme/variables";
import Icon from "../Icon";
import Flex from "../Flex";
import SideBar from "../SideBar";
import { useSideBarMenuContext } from "../../context/SideBarMenuContext";
import Menu from "../Menu";

const NavBar = () => {
  const navigate = useNavigate();
  const { toggleShowMenu } = useSideBarMenuContext();
  const isMd = useMediaQuery(queries.mdMax);

  return (
    <>
      <Container>
        {isMd ? (
          <Icon name="menu" color="lightGreen" />
        ) : (
          <Button bgColor="lightGreen" onClick={() => toggleShowMenu()}>
            Category
          </Button>
        )}

        <Button onClick={() => navigate("/")}>Shopping Center</Button>
        <Flex>
          {isMd ? (
            <>
              <Icon
                name="liked"
                color="yellow"
                onClick={() => navigate("/favorites")}
              />
              <Icon
                name="buyed"
                color="red"
                onClick={() => navigate("/shopping")}
              />
            </>
          ) : (
            <>
              <Button theme="warning" onClick={() => navigate("/favorites")}>
                Favorites
              </Button>
              <Button theme="danger" onClick={() => navigate("/shopping")}>
                Shopping
              </Button>
            </>
          )}
        </Flex>
      </Container>

      <SideBar>
        <Menu />
      </SideBar>
    </>
  );
};

export default NavBar;
