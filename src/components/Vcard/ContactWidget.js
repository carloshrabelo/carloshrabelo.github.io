import React from "react"
import styled from "styled-components"
import { FaEnvelopeOpen, FaMobileAlt, FaMapMarkedAlt } from "react-icons/fa"

import Widget from "./Widget"

const ContactWidget = styled(Widget)`
  border-top: 1px solid #474747;
  padding-top: 10px;
`
const Social = styled.ul`
  margin: 2rem 0;
  li {
    padding: 10px 0;
    list-style: none;
    display: flex;
    &:first-child {
      padding-top: 0;
    }

    svg {
      margin-right: 1rem;
      min-width: 1rem;
    }
  }
`
const Link = styled.a`
  color: #959595;
  text-decoration: none;
  &:hover {
    text-shadow: 0px 0px 2px #31312f;
    color: #ffffff;
  }
`

const Contact = ({ title, data }) => (
  <ContactWidget title={title}>
    <Social>
      {/* <li>
        <FaMapMarkedAlt /> {data.address}
      </li> */}
      <li>
        <Link
          href={`https://api.whatsapp.com/send?phone=${data.phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMobileAlt />
          {data["masked-phone"]}
        </Link>
      </li>
      <li>
        <Link href={`mailto:${data.mail}`}>
          <FaEnvelopeOpen />
          {data.mail}
        </Link>
      </li>
    </Social>
  </ContactWidget>
)

export default Contact
