import { Link } from "gatsby"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { Image } from "./image"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const LandingCardCol = styled(Col)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: ${props => (props.leftpicture ? "center" : "null")};
  @media (min-width: 330px) {
    align-items: center;
    padding-bottom: 4rem;
  }
  @media (min-width: 992px) {
    align-items: ${props =>
      props.leftpicture
        ? "flex-end"
        : props.rightpicture
        ? "flex-start"
        : "center"};
  }
`
const LandingCardCaption = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  padding-top: 1rem;
`
const LandingCardLinks = styled(Link)`
  color: #000;
  width: ${props => (props.leftpicture ? "min-content" : "null")};
  &:hover {
    color: #000;
    text-decoration: none;
  }
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const LandingCards = () => (
  <Row style={{ padding: "4rem 0" }}>
    <LandingCardCol lg={4} md={6} xs={12} leftpicture="leftpicture">
      <LandingCardLinks to="/work/weedman" leftpicture="leftpicture">
        <Image fileName="leftpicture.png" />
        <LandingCardCaption>The Story of Weed Man & Bayer</LandingCardCaption>
      </LandingCardLinks>
    </LandingCardCol>
    <LandingCardCol lg={2} md={6} xs={12}>
      <LandingCardLinks to="/work/noguchi">
        <Image fileName="center.png" />
        <LandingCardCaption>Unfolding Noguchi</LandingCardCaption>
      </LandingCardLinks>
    </LandingCardCol>
    <LandingCardCol lg={4} md={6} xs={12} rightpicture="rightpicture">
      <LandingCardLinks to="/work/bsmnt">
        <Image fileName="rightpicture.png" />
        <LandingCardCaption>BSMNT</LandingCardCaption>
      </LandingCardLinks>
    </LandingCardCol>
  </Row>
)
