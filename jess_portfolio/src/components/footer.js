import { Link } from "gatsby"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const StyledFooterRow = styled(Row)`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3rem 0 6rem 0;
`
const FooterLinkedinLink = styled.a`
  font-weight: 700;
  font-size: 1.6rem;
  color: #000;
  &:hover {
    color: #000;
    text-decoration: none;
  }
`
const FooterGroupLinksParentCol = styled(Col)`
  padding: 2.3rem 0;
  display: flex;
  justify-content: center;
`
const FooterGroupLinksChildCol = styled(Col)`
  display: flex;
  justify-content: space-evenly;
`
const FooterGroupLinks = styled(Link)`
  color: #000;
  border-bottom: 1px solid #000;
  font-size: 1.5rem;
  padding-bottom: 0.1rem;
  &:hover {
    text-decoration: none;
  }
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const Footer = () => (
  <StyledFooterRow>
    <div>
      <FooterLinkedinLink
        href="https://www.linkedin.com/in/jessica0perry/"
        rel="noopener noreferrer"
        target="_blank"
      >
        in
      </FooterLinkedinLink>
    </div>
    <FooterGroupLinksParentCol lg={12} style={{ paddingTop: "2.8rem" }}>
      <FooterGroupLinksChildCol lg={2}>
        <FooterGroupLinks to="/">Work</FooterGroupLinks>
        <FooterGroupLinks to="#">Contact</FooterGroupLinks>
      </FooterGroupLinksChildCol>
    </FooterGroupLinksParentCol>
    <span>&copy; Copyright Jessica Perry | 2020</span>
  </StyledFooterRow>
)
