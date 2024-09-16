import React, { useContext, useState, useMemo, useEffect, useRef } from "react";
import { Link } from "gatsby";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";
import { menuItems } from "./NavConstants";
import { UseSiteMetadata } from "../../hooks/useSiteMetadata";
import { FiChevronDown as ChevronDown } from "react-icons/fi";
import { FiChevronUp as ChevronUp } from "react-icons/fi";
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles";
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from "./NavAnim";
import { withPrefix } from "gatsby";

const NavModule = () => {
  const [isOpen, setNav] = useContext(MenuContext);
  const [isMoreNavOpen, setMoreNav] = useState(false);
  const [subNavIndex, setSubNavIndex] = useState(0);
  const moreDropdownRef = useRef(null);

  const toggleMoreNav = () => {
    setMoreNav((isOpen) => !isOpen);
  }

  const toggleSubNavIndex = (index) => {
    setSubNavIndex(index);
  }

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  }

  const { title } = UseSiteMetadata();
  const pathname = useMemo(() => {
    try {
      if (typeof window !== 'undefined'){
        return window?.location?.pathname;
      } else {
        return '/';
      }
    } catch (e) {
      return '/';
    }
  });

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, close it
        setMoreNav(false);
      }
    };

    // Attach the event listener when the dropdown is shown
    if (isMoreNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Remove the event listener when the component is unmounted or the dropdown is hidden
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreNavOpen]);

  return (
    <NavModuleStyles>
      <div className="menu-container">
        <div className="nav">
          <div className="container">
            <div className="logo-container">
            {title && (
              <LogoStyles>
                <Link to="/">
                  {/* <StaticImage
                    className={'logo-image-circle'}
                    src="../../../static/img/socal-nam-dark-logo.png"
                    alt="logo-dark"
                    layout="constrained"
                    placeholder="logo-dark"
                  /> */}
                  <p style={{ position: 'relative', top: '6px', margin: '0px', color: 'white', fontSize: '12px', fontWeight: 800, fontFamily: '"Heebo", sans-serif' }}>SOCAL</p>
                  <img className={'logo-image-circle'} src={withPrefix('/img/NAM+LOGO+WHITE+NO+TEXT.png')} />
                  <p style={{ position: 'relative', bottom: '12px', margin: '0px', color: 'white', fontSize: '11px', fontWeight: 800, fontFamily: '"Heebo", sans-serif' }}>NORTH AMERICA MISSIONS</p>
                  {/* {title}
                  <span>.</span> */}
                </Link>
              </LogoStyles>
            )}
            </div>
            <HamburgerStyles
              initial="open"
              animate={isOpen ? "open" : "closed"}
              onClick={toggleNav}
              onKeyDown={toggleNav}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className={isOpen ? " open" : ""}
            >
              <motion.span
                className="bar"
                variants={barOneVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barTwoVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barThreeVariants}
              ></motion.span>
            </HamburgerStyles>
          </div>
        </div>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuList}
          transition={{ type: "ease", stiffness: 50, velocity: 50 }}
          className="menu"
        >
          <NavTopLevel>
            {menuItems.map((item, index) => (
              <li class="side-nav-list-item" key={index}>
                {item.accordion ? (
                  <>
                    <button
                      class={`side-nav-link ${pathname === item.path ? 'highlighted' : null}`}
                      type="button"
                      onClick={() => {
                        if (subNavIndex === index) {
                          toggleSubNavIndex(0);
                        } else {
                          toggleSubNavIndex(index);
                        }
                      }}
                      onKeyDown={() => {
                        if (subNavIndex === index) {
                          toggleSubNavIndex(0);
                        } else {
                          toggleSubNavIndex(index);
                        }
                      }}
                    >
                      {item.text}
                      {subNavIndex === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <SubNavStyles
                      initial="closed"
                      animate={subNavIndex === index ? "open" : "closed"}
                      variants={subMenuNavVariants}
                      // class='no-margin'
                    >
                      <hr />
                      {item.accordion.map((accordionItem, accordionIndexndex) => {
                        const { path, text } = accordionItem;
                        return (
                          <li class='side-nav-sublink' key={accordionIndexndex}>
                            <Link
                              class={`side-nav-link ${pathname === path ? 'highlighted' : null}`}
                              onClick={toggleNav}
                              onKeyDown={toggleNav}
                              to={path}
                            >
                              {text}
                            </Link>
                          </li>
                        )
                      })}
                      <hr />
                    </SubNavStyles>
                  </>
                ) : (
                  <Link
                    class={`side-nav-link ${pathname === item.path ? 'highlighted' : null}`}
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to={item.path}
                    activeClassName="menu__item--active"
                  >
                    {item.text}
                    <span>.</span>
                  </Link>
                )}

              </li>
            ))}
          </NavTopLevel>
        </motion.div>
      </div>
      <div className="topnav-container">
        <div className="nav">
          <div className="container">
            <div className="logo-container">
            {title && (
              <LogoStyles>
                <Link to="/">
                <p style={{ width: '208px', position: 'relative', top: '10px', margin: '0px', color: 'white', fontSize: '18px', fontWeight: 800, fontFamily: '"Heebo", sans-serif' }}>SOCAL</p>
                  <img className={'logo-image-circle'} src={withPrefix('/img/NAM+LOGO+WHITE+NO+TEXT.png')} />
                  <p style={{ width: '208px', position: 'relative', bottom: '18px', margin: '0px', color: 'white', fontSize: '16px', fontWeight: 800, fontFamily: '"Heebo", sans-serif' }}>NORTH AMERICA MISSIONS</p>
                  {/* <StaticImage
                    className={'logo-image-circle'}
                    src="../../../static/img/socal-nam-dark-logo.png"
                    alt="logo-dark"
                    layout="constrained"
                    placeholder="logo-dark"
                  /> */}
                  {/* {title}
                  <span>.</span> */}
                </Link>
              </LogoStyles>
            )}
            </div>
            <div className="nav-menu-container">
              {(menuItems ?? []).map((menuItem, index) => {
                if (!menuItem) {
                  return null;
                }
                return (
                  <div key={index} class={`dropdown ${index >= 3 ? 'show-' + (index + 1) : null}`}>
                    <div class={`dropbtn ${(pathname === menuItem.path) ? 'highlighted' : null}`}><a class="nav-title" href={menuItem.path}>{menuItem.text}</a></div>
                    {menuItem.accordion ? (
                      <div class="dropdown-content">
                        {menuItem.accordion.map((accordionItem, accordionIndex) => {
                          return <a key={accordionIndex} href={accordionItem.path}>{accordionItem.text}</a>
                        })}
                      </div>
                    ) : null}
                  </div>
                )
              })}
              <div ref={moreDropdownRef} class="dropdown outlined more-dropdown">
                <div
                  onClick={toggleMoreNav}
                  class="dropbtn flex"
                >
                  More
                  <div class="chevron-container">{isMoreNavOpen ? <ChevronUp style={{ color: 'black' }} /> : <ChevronDown style={{ color: 'black' }} />}</div>
                </div>
                {isMoreNavOpen && (<div class="more-dropdown-content">
                  {menuItems?.length && (
                    menuItems.map((menuItem, index) => {
                      if (index < 3) {
                        return null;
                      }
                      return <a index={index} class={`show-more-${index+1}`} href={menuItem.path}>{menuItem.text}</a>;
                    })
                  )}
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavModuleStyles>
  )
}

export default NavModule
