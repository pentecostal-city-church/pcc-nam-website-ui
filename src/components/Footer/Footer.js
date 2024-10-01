import * as React from "react";
import { Link } from "gatsby";
import { FooterStyles, FooterMenuStyles } from "./FooterStyles";
import { UseSiteMetadata } from "../../hooks/useSiteMetadata";
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"
import { menuItems } from "../NavModule/NavConstants";

const Footer = () => {
  const siteMeta = UseSiteMetadata();


  return (
    <FooterStyles style={{ paddingTop: '48px', marginBottom: '0px', paddingBottom: '0px', marginTop: '72px', background: 'linear-gradient(rgb(2,49,74), rgb(2,49,97))' }} className="section">
      <div className="container container__tight conditional-container">
        <div style={{ display: 'flex' }}>
          <div>
          <Link to="/">
            <img style={{ height: '64px' , marginBottom: '12px' }} src={'http://socalnam.org/img/socal-nam-logo-transparent.png'} />
          </Link>
          {siteMeta.twitterUsername ||
          siteMeta.facebookUsername ||
          siteMeta.instagramUsername ||
          siteMeta.linkedinUsername ? (
            <FooterMenuStyles className="footer__menu social__menu">
              <h5 style={{ fontSize: '16px', borderBottom: '1px solid white', marginBottom: '4px' }}>
                CONNECT WITH US<span>.</span>
              </h5>
              <ul>
                {siteMeta.twitterUsername && (
                  <li>
                    <a
                      href={`https://www.twitter.com/${siteMeta.twitterUsername}`}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      <Twitter style={{ color: 'white' }} />
                    </a>
                  </li>
                )}
                {siteMeta.facebookUsername && (
                  <li>
                    <a
                      href={`https://www.facebook.com/${siteMeta.facebookUsername}`}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      <Facebook style={{ color: 'white' }} />
                    </a>
                  </li>
                )}
                {siteMeta.instagramUsername && (
                  <li >
                    <a
                      style={{ height: '24px', width: '24px' }}
                      href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      <Instagram style={{ color: 'white' }} />
                    </a>
                  </li>
                )}
                {siteMeta.linkedinUsername && (
                  <li>
                    <a
                      href={`https://www.linkedin.com/in/${siteMeta.linkedinUsername}`}
                      target="_blank"
                      rel="nofollow noreferrer noopener"
                    >
                      <Linkedin />
                    </a>
                  </li>
                )}
              </ul>
            </FooterMenuStyles>
          ) : (
            ""
          )}
          </div>
          <div style={{ flexGrow: 2, maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '12px 0px 0px 32px' }}>
            {menuItems.map((item, index) => (
                <div className="side-nav-list-item" style={{ marginBottom: '8px' }} key={index}>
                  {item.accordion ? (
                    <div style={{ margin: '0px 16px' }}>
                    <a
                      className={`footer-nav-link footer-nav-header`}
                      // onClick={toggleNav}
                      // onKeyDown={toggleNav}
                      href={item.path}
                      // activeClassName="menu__item--active"
                    >
                      {item.text}
                    </a>
                    {item.accordion.map((accordionItem, accordionIndexndex) => {
                          const { path, text } = accordionItem;
                          return (
                            <div key={accordionIndexndex}>
                              <a
                                className={`footer-nav-link footer-nav-sub`}
                                // onClick={toggleNav}
                                // onKeyDown={toggleNav}
                                href={path}
                              >
                                {text}
                              </a>
                              </div>
                          )
                    })}
                    </div>
                  ) : (
                    <div style={{ margin: '0px 16px' }}>
                    <a
                      className={`footer-nav-link footer-nav-header`}
                      // onClick={toggleNav}
                      // onKeyDown={toggleNav}
                      href={item.path}
                      // activeClassName="menu__item--active"
                    >
                      {item.text}
                    </a>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div>
        </div>
        {/* <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles> */}
      </div>
      {/* <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Copyright{" "}
            <a
              href={siteMeta.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMeta.developerName}
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles> */}
    </FooterStyles>
  )
}

export default Footer
