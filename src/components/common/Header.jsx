import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import RegularBtn from "./RegularBtn";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/common/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <div className="container">
          <Navbar>
            <Navbar.Brand href="#">
              <StyledLogo variant="primary" />
            </Navbar.Brand>
            <Nav className="ml-auto d-none d-md-flex">
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Resources</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
            </Nav>
            <RegularBtn text="Start your project"></RegularBtn>
          </Navbar>
        </div>
      </header>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  header {
    position: fixed;
    top: 0px;
    background: #fff;
    width: 100%;
    z-index: 1;
  }
`;

const StyledLogo = styled(Logo)`
  width: 120px;
  fill: ${(props) => (props.variant === "primary" ? "#000" : "#fff")};
`;

export default Header;
