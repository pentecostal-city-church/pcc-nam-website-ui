import styled from "styled-components"
import { motion } from "framer-motion"

export const NavModuleStyles = styled.nav`
  .logo-container {
    padding: 12px var(--borderSpacing) 12px var(--borderSpacing);
    width: 320px;
  }

  .nav {
    background-color: transparent;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
  }

  .container {
    background-color: rgb(2, 49, 74);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .container-2 {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .menu {
    background-color: #000;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;
  }

  .menu-container {
    @media only screen and (min-width: 861px) {
      display: none;
    }
  }

  .logo-image {
    height: 64px;
  }

  .logo-image-circle {
    height: 60px;
    @media only screen and (min-width: 430px) {
      height: 120px;
    }
  }

  .topnav-container {
    @media only screen and (max-width: 860px) {
      display: none;
    }
  }

  .dropbtn {
    color: white;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Heebo', sans-serif;
    opacity: 0.85;
    margin: 0px 16px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  .outlined {
    z-index: 1000;
    border: 1px solid white;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    right: -24px;
    background-color: #02314a;
    min-width: 105px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content:hover {
    display: block;
  }
  
  .dropdown-content a {
    color: white;
    opacity: 0.85;
    text-transform: uppercase;
    padding: 16px;
    text-decoration: none;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    font-family: 'Heebo', sans-serif;
  }

  .highlighted {
    opacity: 1;
  }

  .dropdown-content a:hover {
    opacity: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .dropdown:hover .dropbtn {
    opacity: 1;
  }

  .nav-title {
    color: white;
    text-decoration: none;
  }

  .show-4 {
    @media only screen and (max-width: 950px) {
      display: none;
    }
  }

  .show-5 {
    @media only screen and (max-width: 1150px) {
      display: none;
    }
  }

  .show-6 {
    @media only screen and (max-width: 1195px) {
      display: none;
    }
  }

  .show-7 {
    @media only screen and (max-width: 1252px) {
      display: none;
    }
  }

  .more-dropdown .more-dropdown-content .show-more-4 {
    @media only screen and (min-width: 951px) {
      display: none;
    }
  }

  .more-dropdown .more-dropdown-content .show-more-5 {
    @media only screen and (min-width: 1151px) {
      display: none;
    }
  }

  .more-dropdown .more-dropdown-content .show-more-6 {
    @media only screen and (min-width: 1196px) {
      display: none;
    }
  }

  .more-dropdown .more-dropdown-content .show-more-7 {
    @media only screen and (min-width: 1253px) {
      display: none;
    }
  }

  .more-dropdown {
    width: 96px;
    margin-right: 24px;
    @media only screen and (min-width: 1183px) {
      display: none;
    }
  }

  .more-dropdown:hover {
    opacity: 1;
  }

  .flex {
    display: flex;
  }

  .chevron-container {
    margin-left: 4px;
    display: flex;
    align-items: center;
    color: white;
    opacity: 0.85;
  }

  .more-dropdown-content {
    margin-top: 8px;
    position: absolute;
    background-color: #02314a;
    min-width: 105px;
    right: -24px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .more-dropdown-content a {
    color: white;
    opacity: 0.85;
    font-weight: 800;
    text-transform: uppercase;
    padding: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: 'Heebo', sans-serif;
  }

  .hidden {
    display: none;
  }

  .highlighted {
    opacity: 1;
  }
  
  .more-dropdown-content a:hover {
    opacity: 1;
  }

  .side-nav-link {
    opacity: 0.85;
  }

  .side-nav-list-item {
    min-height: 64px;
  }

  .side-nav-list-item ul {
    padding-left: 0px;
  }

  .side-nav-sublink {
    padding-left: 20px;
  }

  .no-margin {
    margin: 0;
  }

  .side-nav-link.highlighted {
    opacity: 1;
  }
`

export const NavTopLevel = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li,
  > li > button {
    text-transform: capitalize;
    font-size: var(--h2);
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease;

    a {
      text-decoration: none;
      color: #fff;
    }

    span {
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
      > a {
        color: var(--primary);
      }
    }
  }

  > li {
    &.open {
      > button > svg {
        transform: rotate(180deg);
      }
    }
  }

  > li > button {
    background-color: transparent;
    padding: 0;
    color: #fff;
    border: none;
    font-family: 'Heebo', sans-serif;
    display: flex;
    align-items: center;
  }

  > li > button > svg {
    font-size: 22px;
    margin-left: 6px;
    color: var(--primary);
    transition: transform 0.3s ease;

    @media (min-width: 768px) {
      font-size: 26px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }
`

export const SubNavStyles = styled(motion.ul)`
  padding-left: calc(var(--gap) / 2);
  list-style: none;
  margin: 0;

  > li {
    font-size: var(--h4);
    font-weight: 700;

    &:hover {
      > a {
        color: var(--primary);
      }
    }
  }

  @media (min-width: 1024px) {
    padding-left: var(--gap);
  }

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const HamburgerStyles = styled(motion.button)`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  padding: 1px;
  margin: 0px 36px;
  z-index: 9999999;
  cursor: pointer;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  .bar {
    display: block;
    background-color: white;
    height: 2px;
    border-radius: 2px;

    &:nth-of-type(2) {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`

export const LogoStyles = styled.div`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }

  span {
    color: var(--primary);
  }

  &:hover,
  &:focus {
    a {
      color: var(--primary);
    }
  }
`
