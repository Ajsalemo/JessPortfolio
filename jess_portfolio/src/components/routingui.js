import { Link } from "gatsby"
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

// --------------------------------------- Styled Components ------------------------ //
// ---------------------------------------------------------------------------------- //

// This dictates the 'paginated' type routing link location and how it's displayed based on route
const StyledRoutingUICol = styled(Col)`
  align-items: center;
  height: 8rem;
  display: flex;
  flex-direction: row;
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
  font-weight: 500;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #000;
    text-decoration: none;
  }
  @media (min-width: 602px) {
    font-size: 2.1rem;
  }
`

const StyledRoutingUISpan = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: initial;
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
  return (
    <Row>
      <StyledRoutingUICol
        xs={12}
        lg={12}
        backlink={backLink}
        start={start}
        end={end}
      >
        {backLink ? (
          <StyledRoutingUILink to={backLink}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ margin: "0 2rem" }}
            />
            <StyledRoutingUISpan>{backLinkName}</StyledRoutingUISpan>
          </StyledRoutingUILink>
        ) : null}

        <StyledRoutingUILink to={forwardLink}>
          {end ? (
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ margin: "0 2rem" }}
            />
          ) : null}
          <StyledRoutingUISpan>{forwardLinkName}</StyledRoutingUISpan>
          {end ? null : (
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ margin: "0 2rem" }}
            />
          )}
        </StyledRoutingUILink>
      </StyledRoutingUICol>
    </Row>
  )
}
