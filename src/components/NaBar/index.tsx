import React from "react";
import { Container } from "./styles";
import Button from "../Button";
import { Link } from "react-router-dom";

const NavBar = () => {
    // const navigate = useNavigate();
  return (
    <Container>
      <Button bgColor="lightGreen" onClick={() => console.log("Category")}>
        Category
      </Button>
      <Link to='/'>
      <Button>
        Shopping Center
      </Button>
      </Link>
      <div>
        <Link to='/favorites'>
        <Button theme="warning" >
          Favorites
        </Button>
        </Link>
        <Link to='/shopping'>
        <Button theme="danger" >
          Shopping
        </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NavBar;