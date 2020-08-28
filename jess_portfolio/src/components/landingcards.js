import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
// Components
import { Image } from "./image"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const LandingCardCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.leftpicture
      ? "flex-end"
      : props.rightpicture
      ? "flex-start"
      : "center"};
`
const LandingCardCaption = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  padding-top: 1rem;
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const LandingCards = () => (
  <Row style={{ paddingTop: "4rem" }}>
    <LandingCardCol lg={4} leftpicture="leftpicture">
      <Image fileName="leftpicture.png" />
      <LandingCardCaption>The Story of Weed Man & Bayer</LandingCardCaption>
    </LandingCardCol>
    <LandingCardCol lg={4}>
      <Image fileName="rightpicture.png" />
      <LandingCardCaption>Unfolding Noguchi</LandingCardCaption>
    </LandingCardCol>
    <LandingCardCol lg={4} rightpicture="rightpicture">
      <Image fileName="rightpicture.png" />
      <LandingCardCaption>BSMNT</LandingCardCaption>
    </LandingCardCol>
  </Row>
)
