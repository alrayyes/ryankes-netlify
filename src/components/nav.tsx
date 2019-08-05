import { Link } from 'gatsby'
import { Guid } from 'guid-typescript'
import React from 'react'

import styled from 'styled-components'
// tslint:disable-next-line:no-submodule-imports
import { Bars } from 'styled-icons/fa-solid/Bars'
import { Container, FloatRight, MenuLinkCss } from '../styles/main'

const Wrapper = styled.nav`
  height: 6.0rem;
  width: 100%;
`

const Section = styled.section`
  ${Container}
`

const SectionLink = styled(Link)`
  letter-spacing: .1rem;
  text-transform: uppercase;

  display: inline;
  line-height: 6.0rem;
  ${MenuLinkCss}
`

interface IInputProps {
  theme: {
    color: {
      altBg: string,
    },
  }
}

const Input = styled.input<IInputProps>`
  display: none;

  @media only screen and (max-width : 768px) {
    &:checked + label {
      color: ${(props) => props.theme.color.altBg};
    }
    &:checked + label + ul {
      visibility: visible;
      opacity: 1;
      max-height: 100rem;
    }
  }
`

const Label = styled.label`
  display: none;
    @media only screen and (max-width : 768px) {
      display: block;
      line-height: 6.0rem;
      cursor: pointer;
    }
  ${FloatRight}
`

interface IListProps {
  theme: {
    color: {
      bg: string,
      altBg: string,
    },
  }
}

const List = styled.ul<IListProps>`
  float: right;
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  @media only screen and (max-width : 768px) {
    position: absolute;
    top: 6.0rem;
    right: 0;
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    padding: 0;
    max-height: 0;
    width: 100%;
    background-color: ${(props) => props.theme.color.bg};
    border-top: solid 2px ${(props) => props.theme.color.altBg};
    border-bottom: solid 2px ${(props) => props.theme.color.altBg};
    transition: opacity 0.25s, max-height 0.15s linear;

`

const ListElement = styled.li`
  float: left;
    margin: 0;
    position: relative;
    @media only screen and (max-width : 768px) {
      float: none !important;
      text-align: center;
`

const PageLink = styled(Link)`
  margin-left: 1.0rem;
  margin-right: 1.0rem;
  display: inline;
  line-height: 6.0rem;
  ${MenuLinkCss}
`

const BarsIcon = styled(Bars)`
  width: 21px;
  vertical-align: 0;
`

interface IMenuLink {
  link: string
  name: string
}

const MenuLink: React.FunctionComponent<IMenuLink> = (props) => (
  <ListElement>
    <PageLink to={props.link}>{props.name}</PageLink>
  </ListElement>
)

interface INavProps {
  siteTitle: string
  checkboxId?: string
}

const Nav: React.FunctionComponent<INavProps> = (props) => (
  <Wrapper>
    <Section>
      <SectionLink to="/">
        {props.siteTitle}
      </SectionLink>
      <Input type="checkbox" id={props.checkboxId}/>
      <Label htmlFor={props.checkboxId}>
        <BarsIcon/>
      </Label>
      <List>
        <MenuLink link="blog" name="Blog"/>
        <MenuLink link="project" name="Project"/>
        <MenuLink link="tunes" name="Tunes"/>
        <MenuLink link="about" name="About"/>
        <MenuLink link="contact" name="Contact"/>
      </List>
    </Section>
  </Wrapper>
)

Nav.defaultProps = {
  checkboxId: Guid.create().toString(),
}

export default Nav
