import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/common/logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <div className="container">
          <div className="row content">
            <div className="col-md-4 logo col-12">
              <StyledLogo variant="secondary" />
            </div>
            <div className="col-md-2">
              <h2 className="mb-4">Product</h2>
              <ul>
                <li>
                  <a href="/#">Authgear</a>
                </li>
                <li>
                  <a href="/#">Authgear</a>
                </li>
                <li>
                  <a href="/#">Authgear</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h2 className="mb-4">Services</h2>
              <ul>
                <li>
                  <a href="/#">Digital Product Development</a>
                </li>
                <li>
                  <a href="/#">Digital Product Development</a>
                </li>
                <li>
                  <a href="/#">Digital Product Development</a>
                </li>
                <li>
                  <a href="/#">Digital Product Development</a>
                </li>
                <li>
                  <a href="/#">Digital Product Development</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h2 className="mb-4">Know More</h2>
              <ul>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h2 className="mb-4">Connect</h2>
              <ul>
                <li>
                  <a href="/#">Facebook</a>
                </li>
                <li>
                  <a href="/#">Facebook</a>
                </li>
                <li>
                  <a href="/#">Facebook</a>
                </li>
                <li>
                  <a href="/#">Facebook</a>
                </li>
                <li>
                  <a href="/#">Facebook</a>
                </li>
                <li>
                  <a href="/#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright row justify-content-between mx-1">
            <p>hello@oursky.com</p>
            <p>© Oursky Ltd.</p>
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
};

const StyledLogo = styled(Logo)`
  width: 120px;
  fill: ${(props) => (props.variant === "primary" ? "#000" : "#fff")};
`;

const StyledFooter = styled.div`
  footer {
    background: #232323;
    color: #fff;
    padding: 100px 0px 20px;

    a {
      color: #fff;
      line-height: 24px;
    }
    .content {
      margin-bottom: 80px;
    }
    .copyright {
      color: #888;
    }
  }
`;

export default Footer;
