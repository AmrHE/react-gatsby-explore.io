import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">ExploreEgypt.io</NavLink>
      <Bars/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
      <Button round="true" primary="true" to="/trips" >
        Book a Flight
      </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header


const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) /2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #FFF;
  
  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`


const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

@media screen and (max-width: 786px) {
    display: none;
  }

`