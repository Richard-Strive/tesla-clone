import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Container>
      <a href>
        <img src="/images/logo.svg" alt="tesla logo" />
      </a>
      <Menu>
        <a href>Model S</a>

        <a href>Model 3</a>

        <a href>Model X</a>

        <a href>Model Y</a>
      </Menu>
      <RightMenu>
        <a href>Shop</a>
        <a href>Tesla Account</a>
        <CustomMenu />
      </RightMenu>
      <BurgerNavMenu>
        <li>
          <a href>Existing Invetory</a>
        </li>
        <li>
          <a href>Used Invetory</a>
        </li>
        <li>
          <a href>Trade-In</a>
        </li>
        <li>
          <a href>Cybertruck</a>
        </li>
        <li>
          <a href>Roadster</a>
        </li>
        <li>
          <a href>Existing Invetory</a>
        </li>
        <li>
          <a href>Existing Invetory</a>
        </li>
        <li>
          <a href>Existing Invetory</a>
        </li>
        <li>
          <a href>Existing Invetory</a>
        </li>
      </BurgerNavMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNavMenu = styled.div`
  position: fixed;
  top: 0;
  /* bottom: 0; */
  right: 0;
  background: white;
  width: 300px;
`;
