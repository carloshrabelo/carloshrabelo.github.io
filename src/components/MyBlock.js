import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import Period from "./Period"
import Badge from "../components/Badge"

const Block = styled.div`
  position: "relative";
`

const MyBlock = ({
  role,
  company,
  date,
  dateShort,
  description,
  about,
  technologies,
}) => (
  <Block>
    {role && <h3>{role}</h3>}
    {company && <strong>{company}</strong>}
    {date && (
      <Period date={date} dateShort={dateShort}>
        {date}
      </Period>
    )}
    {about && <div>{about}</div>}
    {description && (
      <ul style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }}>
        {description.map((d, key) => (
          <li key={key} dangerouslySetInnerHTML={{ __html: d }} />
        ))}
      </ul>
    )}
    {technologies &&
      technologies.map((technologie, key) => (
        <Badge key={key}>{technologie}</Badge>
      ))}
  </Block>
)

MyBlock.propTypes = {
  description: PropTypes.array,
}

MyBlock.defaultProps = {
  dateShort: false,
  description: [],
}

export default MyBlock
