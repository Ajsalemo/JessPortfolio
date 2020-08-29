import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
// Components
import { Image } from "./image"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

const BioImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  padding-left: 7rem;
`
const BioFont = styled.p`
  padding-top: ${props => (props.topParagraph ? "null" : "2.5rem")};
  font-size: 1.055rem;
`
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const Bio = () => (
  <Row style={{ padding: "9rem 0" }}>
    <BioImageCol lg={6}>
      <Image fileName="headshot.png" />
    </BioImageCol>
    <Col lg={5}>
      <BioFont topParagraph="topParagraph">Hi! I'm Jessica.</BioFont>

      <BioFont>
        I am originally from Ohio but have lived in Charlotte, North Carolina
        for most of my life. I am currently in the first semester of my senior
        year at the University of North Carolina Wilmington studying Film and
        Digital Arts.{" "}
      </BioFont>

      <BioFont>
        I chose UNCW for its Film Studies program with the intent of pursuing
        video editing after graduation. Though I appreciate all stages of film
        production, there is something so special about the challenge of
        receiving footage and building a story out of it through editing. I am
        passionate about solving problems creatively and communicating stories
        through visual media.
      </BioFont>
    </Col>
  </Row>
)
