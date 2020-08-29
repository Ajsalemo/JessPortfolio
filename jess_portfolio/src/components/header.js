import { Link } from "gatsby"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import NavbarBrand from "react-bootstrap/NavbarBrand"
import styled from "styled-components"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const StyledNavbar = styled(Navbar)`
  height: 10rem;
  justify-content: space-between;
  padding: 0 2.6rem;
`
const StyledNavbarBrand = styled(NavbarBrand)`
  font-size: 1.95rem;
  font-weight: 500;
  letter-spacing: 0.03rem;
`
const LinkedinLink = styled.a`
  padding-left: 2rem;
  font-weight: 800;
  font-size: 1.2rem;
  color: #000;
`
const HeaderParentDiv = styled.div`
  width: 14%;
  display: flex;
  justify-content: space-around;
  padding: 0 0 0.2rem 0.5rem;
  font-size: 1.05rem;
  align-items: center;
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const Header = ({ name }) => (
  <StyledNavbar>
    <StyledNavbarBrand href="/">{name}</StyledNavbarBrand>
    <HeaderParentDiv>
      <Link to="/" style={{ color: "#000" }}>
        Work
      </Link>
      <Link to="/about" style={{ color: "#000" }}>
        About
      </Link>
      <LinkedinLink
        href="https://www.linkedin.com/in/jessica0perry/"
        linkedin="linkedin"
        rel="noopener noreferrer"
        target="_blank"
      >
        in
      </LinkedinLink>
    </HeaderParentDiv>
  </StyledNavbar>
)
