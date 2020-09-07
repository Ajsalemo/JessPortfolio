import { Link } from "gatsby"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

// This dictates the 'paginated' type routing link location and how it's displayed based on route
const StyledRoutingUICol = styled(Col)`
  display: flex;
  justify-content: ${props =>
    props.backlink
      ? "space-between"
      : props.start
      ? "flex-end"
      : props.end
      ? "flex-start"
      : null};
`

const StyledRoutingUILink = styled(Link)`
  color: #000;
  font-size: 2.1rem;
  font-weight: 500;
  display: flex;
  &:hover {
    color: #000;
    text-decoration: none;
  }
`

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const RoutingUI = ({
  forwardLinkName,
  forwardLink,
  backLinkName,
  backLink,
  start,
  end,
}) => {
  console.log(start)
  console.log(end)
  return (
    <Row>
      <StyledRoutingUICol lg={12} backlink={backLink} start={start} end={end}>
        {backLink ? (
          <StyledRoutingUILink to={backLink}>
            {backLinkName} 
          </StyledRoutingUILink>
        ) : null}

        <StyledRoutingUILink to={forwardLink}>
          {forwardLinkName}
        </StyledRoutingUILink>
      </StyledRoutingUICol>
    </Row>
  )
}
