import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { countries, countryToFlag } from "./contact-us-page";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { withPrefix } from "gatsby";

export const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
export const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas ",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory ",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands ",
	"Central African Republic ",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands ",
	"Colombia",
	"Comoros ",
	"Congo (the Democratic Republic of the)",
	"Congo ",
	"Cook Islands ",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic ",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands  [Malvinas]",
	"Faroe Islands ",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories ",
	"Gabon",
	"Gambia ",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See ",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic ",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands ",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands ",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger ",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands ",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines ",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands ",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates ",
	"United Kingdom of Great Britain and Northern Ireland",
	"United States Minor Outlying Islands",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];
// eslint-disable-next-line
export const DaughterWorkPageTemplate = ({ title, content, contentComponent }) => {
    const [countryCode, setCountryCode] = React.useState('1');
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [usState, setUSState] = React.useState('California');
    const [country, setCountry] = React.useState('United States of America');
    const [address1, setAddress1] = React.useState('');
    const [address2, setAddress2] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [motherChurch, setMotherChurch] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [sent, setSent] = React.useState(false);
    const [targetCity, setTargetCity] = React.useState('');
    const [contacted, setContacted] = React.useState('NO');
    const [upciChurchPresent, setUPCIChurchPresent] = React.useState('NO');

    const countriesMemo = React.useMemo(() => {
        return countries;
    }, [countries]);

    const selectOnChange = (e) => {
        setCountryCode(e.target.value);
    }

    const countryOnChange = (e) => {
        setCountry(e.target.value);
    }

    const stateOnChange = (e) => {
        setUSState(e.target.value);
    }

    const contactedOnChange = (e) => {
        setContacted(e.target.value);
    }

    const churchPresentOnChange = (e) => {
        setUPCIChurchPresent(e.target.value);
    }

    const startTrainingHandler = () => {
        window.open('https://ministrycentral.com/the-launch-button', 'blank');
    }

    const reason = `Mother Church Address: ${address1}, ${address2}, ${targetCity}, ${zipcode} ${usState}, ${country}. Mother Church Pastor Email: ${email}. Target City for Daughter Work: ${targetCity}. Have you contacted the Presbyter of this section? ${contacted}. Is there a UPC Church in this area? ${upciChurchPresent}.`;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '32px 0px 0px' }}>
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <img style={{ height: '120px', borderRadius: '60px' }} className={'logo-image-circle'} src={withPrefix('/img/dwp.png')} />
                <p style={{ margin: '24px 0px 0px', maxWidth: '1050px', color: 'white', fontSize: '18px'}}>{`Before completing this Daughter Work application form, please make sure you have`}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ margin: '0px', maxWidth: '1050px', color: 'white', fontSize: '18px' }}>read through the <a href={'/pcc-nam-website-ui/policy-form'} style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }}>SoCal District Policy Form</a>. Contact us with any questions. Once you</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ margin: '0px', maxWidth: '1050px', color: 'white', fontSize: '18px' }}>feel free to submit your online application to: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
            </div>

            <div style={{ justifyContent: 'center', margin: '32px 0px' }} className={'subtitle-text-container'}>
                <button onClick={startTrainingHandler} className={`training-button`}>
                {`START ONLINE TRAINING!`}
                </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ margin: '0px', maxWidth: '1050px', color: 'white', fontSize: '18px' }}>{`Daughter Work Project Grant Application`}</p>
            <a target="_blank" href={'https://drive.google.com/file/d/1SEbuEYw8b0MgVqvTvcOKH4YtO0ow7bYA/view?usp=sharing'} style={{ marginBottom: '16px', marginTop: '0px', color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }}>{`Click here to access the application form.`}</a>
            </div>
            {sent ? (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '48px 72px' }}>
                    <FaCheckCircle />
                    <p style={{ color: 'white' }}><b>Thank you!</b></p>
                    <p style={{ marginTop: '0px', fontSize: '14px', color: 'white' }}>You will hear from someone on the SoCal District North American Missions Committee soon!</p>
                    <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
                        <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
                    </div>
                    <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                        <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: 
                            <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a>
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                <div style={{ margin: '48px 0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', height: '360px', width: '100%', backgroundImage: 'url("https://i.redd.it/t2j51hl4qfwb1.jpg")' }}/>
                {/* <div style={{ margin: '0px 72px' }}>
                    <div>
                        <p style={{ fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif', marginBottom: '4px' }}>SOCAL DISTRICT DAUGHTER WORK APPLICATION</p>
                    </div>
                    <p style={{ color: 'white', fontSize: '14px' }}>{`To be completed by the mother church pastor only.`}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 72px', width: '80%' }}>
                    <div style={{ marginTop: '24px' }}>
                        <p style={{ fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif', marginBottom: '0px' }}>MOTHER CHURCH PASTOR</p>
                    </div>
                    <div style={{ marginTop: '20px', width: '80%', maxWidth: '512px', alignSelf: 'flex-start' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>First Name</p></div>
                            <div><input value={fName} onChange={(e) => {console.log(e.target.value);setFName(e.target.value);}} style={{ padding: '0px 16px', color: 'white', border: '2px solid #fff', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Last Name</p></div>
                            <div><input value={lName} onChange={(e) => setLName(e.target.value)} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Name of Mother Church</p></div>
                            <div><input value={motherChurch} onChange={(e) => setMotherChurch(e.target.value)} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                        </div>
                    </div>
    
                    <div style={{ marginTop: '24px' }}>
                        <p style={{ fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif', marginBottom: '0px' }}>ADDRESS OF MOTHER CHURCH</p>
                    </div>
                    <div style={{ marginTop: '20px', width: '80%', maxWidth: '512px', alignSelf: 'flex-start' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Address Line 1</p></div>
                            <div><input value={fName} onChange={(e) => {setAddress1(e.target.value)}} style={{ padding: '0px 16px', color: 'white', border: '2px solid #fff', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Address Line 2</p></div>
                            <div><input value={lName} onChange={(e) => setAddress2(e.target.value)} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>City</p></div>
                            <div><input value={motherChurch} onChange={(e) => setMotherChurch(e.target.value)} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div>
                            <p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>
                                State
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <select onChange={stateOnChange} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }}>
                                {states.map((option, index) => {
                                    return (
                                        <option selected={usState === option ? 'selected' : ''} key={index} value={option}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div>
                            <p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>
                                Country
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <select onChange={countryOnChange} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }}>
                                {countryList.map((option, index) => {
                                    return (
                                        <option selected={country === option ? 'selected' : ''} key={index} value={option}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Zip Code</p></div>
                        <div><input value={zipcode} onChange={(e) => setZipcode(e.target.value)} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div>
                            <p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>
                                Phone Number
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaPhoneAlt style={{ width: '20px', height: '20px', marginRight: '8px', border: 'none' }} />
                            <select onChange={selectOnChange} style={{ width: '36px', height: '64px', fontSize: '24px', backgroundColor: 'transparent', border: 'none' }}>
                                {countriesMemo.map((option, index) => {
                                    return (
                                        <option key={index} value={option.phone}>
                                            {countryToFlag(option.code)}
                                            {option.label} ({option.code}) +{option.phone}
                                        </option>
                                    );
                                })}
                            </select>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(201) 555-0123" style={{ color: 'white', padding: '0px 16px', border: '2px solid #fff', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} />
                        </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Email of Mother Church Pastor</p></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}><MdEmail style={{ width: '20px', height: '20px' }} /><input value={email} onChange={(e) => setEmail(e.target.value)} style={{ color: 'white', marginLeft: '16px', padding: '0px 16px', border: '2px solid #fff', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                            <div><p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>Target City for Daughter Work</p></div>
                            <div><input value={targetCity} onChange={(e) => setTargetCity(e.target.value)} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }} /></div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div>
                            <p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>
                            Have you contacted the Presbyter of this section?
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <select onChange={contactedOnChange} style={{padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }}>
                                {['YES', 'NO'].map((option, index) => {
                                    return (
                                        <option selected={contacted === option ? 'selected' : ''} key={index} value={option}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <div>
                            <p style={{ color: 'rgb(177, 177, 177)', fontFamily: '"Heebo",sans-serif', marginBottom: '4px', fontSize: '22px', fontWeight: 300 }}>
                            Is there a UPC Church in this area?
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <select onChange={churchPresentOnChange} style={{ padding: '0px 16px', border: '2px solid #fff', color: 'white', width: '100%', backgroundColor: 'black', maxWidth: '512px', height: '60px' }}>
                                {['YES', 'NO'].map((option, index) => {
                                    return (
                                        <option selected={upciChurchPresent === option ? 'selected' : ''} key={index} value={option}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div style={{ marginTop: '56px', textAlign: 'center' }}>
                    <div>
                        <a onClick={() => setSent(true)} style={{ border: '2px solid #fff', backgroundColor: 'black', padding: '10px 40px', width: '150px', color: 'white', textTransform: 'uppercase', textDecoration: 'none', fontSize: '18px' }} href={`mailto:socalnorthamericanmissions@gmail.com?body=${reason}&subject=Inquiry from ${fName} ${lName} (${motherChurch}): +${countryCode} ${phone}`} target="_blank">Submit</a>
                    </div>
                </div>
                </div> */}
                <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
                </div>
                <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                  <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
                </div>
                </div>
            )}
        </div>
    );
};

DaughterWorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DaughterWorkPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DaughterWorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DaughterWorkPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DaughterWorkPage;

export const DaughterWorkPageQuery = graphql`
  query DaughterWorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
