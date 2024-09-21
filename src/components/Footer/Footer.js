import * as React from "react"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

const Footer = () => {
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ paddingTop: '64px', marginBottom: 0, marginTop: '72px', backgroundColor: 'rgb(2, 49, 74)' }} className="section">
      <div className="container container__tight">
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
        {siteMeta.twitterUsername ||
        siteMeta.facebookUsername ||
        siteMeta.instagramUsername ||
        siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5 style={{ borderBottom: '1px solid white' }}>
              FOLLOW SOCAL NAM<span>.</span>
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
        <Link to="/">
        <img style={{ height: '96px' }} src={withPrefix('/img/socal-nam-logo-transparent.png')} />
        </Link>
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
