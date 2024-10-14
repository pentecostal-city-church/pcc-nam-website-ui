import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root {  
  --bannerTitle: 34px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: rgb(0,0,0);
  --primary: #ffc400;
  --bodyColor: #afc2cb;
  --inActive: #555;
  --letterSpacing: -0.075rem;
  --boxShadow: 0px 15px 22px 3px rgba(0, 0, 0, 0.55);
  --textShadow: 0px 0px 5px rgba(0, 0, 0, 1);
  --p: 14px;
  --h2: 20px;
  --h3: 19px;
  --h4: 18px;
  --h5: 17px;
  --h6: 16px;
  --gap: 40px;
  --sectionMargin: 60px;

  @media(min-width:375px) {
    --bannerTitle: 36px;    
    --h2: 22px;
    --h3: 21px;
    --h4: 20px;
    --h5: 19px;
    --h6: 18px;
    --sectionMargin: 80px;
  }

  @media(min-width:414px) {
    --bannerTitle: 40px;    
    --h2: 27px;
    --h3: 25px;
    --h4: 23px;
    --h5: 21px;
    --h6: 20px;
  }

  @media(min-width:768px) {
    --bannerTitle: 46px;    
    --blockquote: 26px;
    --p: 15px;
    --h2: 30px;
    --h3: 28px;
    --h4: 26px;
    --h5: 24px;
    --h6: 22px;
    --sectionMargin: 100px;
  }

  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --p: 16px;
    --h2: 36px;
    --h3: 32px;
    --h4: 29px;
    --h5: 27px;
    --h6: 25px;
    --sectionMargin: 180px;
  }

  @media(min-width:1200px) {
    --p: 17px;
  }
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}  


body {
    font-family: 'Heebo', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #fff;
    overflow-x: hidden;
    font-size: var(--p);
}

h1,
h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.25em;
    font-weight: 700;
    letter-spacing: var(--letterSpacing);

    @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
    }
}

h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

h1 {
    font-size: var(--bannerTitle);
}

h2 {
    font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}

p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--bodyColor);
}

b,
strong {
  font-weight: 700;
}

i {
  font-style: italic;
}

.underline {
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: rgba(175, 194, 203, 0.25);
  text-decoration-thickness: 0.125rem;
}

hr,
ol,
ul,
blockquote {
  margin-top: calc(var(--sectionMargin) / 2);
  margin-bottom: calc(var(--sectionMargin) / 2);
}

hr {
  border: none; 
  height: 2px;
  background-color: #333;
}

a {
  color: var(--primary);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

blockquote {
  font-size: var(--blockquote);
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  margin-left: 0;
  border-left: 2px solid var(--primary);
  padding-left: var(--gap);
}

.container {
  margin-left: auto;
  margin-right: auto;

  &__tight {
    max-width: 1400px;
  }

  &__scroll {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      width: 14px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }
    &::-webkit-scrollbar-track {
      background: #000;
      border-radius: 0px;
    }

    @media (min-width: 1200px) {
      overflow-x: visible;
    }
  }
}

.section {
    margin-top: var(--sectionMargin);
    margin-bottom: var(--sectionMargin);
    padding: 0 var(--borderSpacing);

    &.section__padding {
        padding-top: var(--sectionMargin);
        padding-bottom: var(--sectionMargin);
    }
}

.intro__area {
  margin-bottom: calc(var(--gap) * 2);
  max-width: 700px;

  h2 {
    display: inline-block;
    border-bottom: 2px solid rgba(255,255,255,0.15);
  }
}

.rsm-svg {
  height: 325px;
  width: 325px;
  @media(min-width:400px) {
    height: 375px;
    width: 375px;
  }
  @media(min-width:500px) {
    height: 400px;
    width: 600px;
  }
  @media(min-width:600px) {
    height: 450px;
    width: 650px;
  }
  @media(min-width:700px) {
    height: 525px;
    width: 700px;
  }
  @media(min-width:800px) {
    height: 600px;
    width: 100%;
  }
  @media(min-width:924px) {
    height: 650px;
    width: 100%;
  }
  @media(min-width:1000px) {
    height: 650px;
    width: 100%;
  }
  @media(min-width:1100px) {
    height: 750px;
    width: 600px;
  }
  @media(min-width:1200px) {
    height: 725px;
    width: 600px;
  }
  @media(min-width:1300px) {
    height: 700px;
    width: 600px;
  }
  @media(min-width:1400px) {
    height: 700px;
    width: 725px;
  }
  @media(min-width:1500px) {
    height: 700px;
    width: 750px;
  }
  @media(min-width:1600px) {
    height: 800px;
    width: 900px;
  }
  @media(min-width:1700px) {
    height: 725px;
    width: 950px;
  }
  @media(min-width:1800px) {
    height: 725px;
    width: 1050px;
  }
  @media(min-width:1900px) {
    height: 725px;
    width: 1150px;
  }
  @media(min-width:2000px) {
    height: 800px;
    width: 1250px;
  }
  @media(min-width:2200px) {
    height: 825px;
    width: 1250px;
  }
  @media(min-width:2400px) {
    height: 850px;
    width: 1350px;
  }
  @media(min-width:2500px) {
    height: 950px;
    width: 1500px;
  }
}

.hover-tooltip-container {
}

.hover-tooltip-container-transparent {
  opacity: 0;
}

.population-text {
  margin: 0px;
  font-size: 12px;
}

.rsm-geographies {
  cursor: pointer;
  transform: rotate(-13deg);
}

.learn__more {
  margin-top: calc(var(--gap) * 2);
}

.feed {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;

  >* {
    flex: 0 0 100%;

    @media(min-width:414px) {
      flex-basis: calc(50% - (calc(var(--gap) / 2)));
    }

    @media(min-width:1024px) {
      flex-basis: calc(33.333% - 27px);
    }
  }
}

.contentimg {
  margin-top: var(--gap);
  margin-bottom: var(--gap);
}

.contentdescription {
  color: var(--bodyColor);
  font-style: italic;
  font-size: 0.813rem;
  text-align: center;
  margin-top: calc(var(--gap) / 2);
}

.subtitle-text {
  font-size: 14px;
  color: #fff;
  font-weight: 800;
  text-align: center;
  letter-spacing: 3.6px;
  font-family: "Heebo", sans-serif;
  text-transform: uppercase;
}

text {
  fill: white;
  font-size: 24px;
  text-transform: uppercase;
  font-variant-ligatures: none;
  letter-spacing: 6px;
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
  font-weight: 800;
  font-family: "Heebo", sans-serif;
  @media(min-width:1200px) {
    font-size: 36px;
  }
}

svg.circular-text-svg {
  width: 320px;
  transition: opacity .5s ease-in-out;
  -moz-transition: opacity .5s ease-in-out;
  -webkit-transition: opacity .5s ease-in-out;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.textcircle {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: 250px 250px;
}

.landing-main-container {
  height: calc(100vh - 92.5px);
  justify-content: center;
  background-image: url("http://socalnam.org/img/main.jpg");
  @media(min-width:831px) {
    display: flex;
    height: calc(100vh - 154.5px);
  }
}

.bullet-margin {
  margin: 48px 12px 0px;
  @media(min-width:600px) {
    margin: 48px 24px 0px;
  }
  @media(min-width:800px) {
    margin: 48px 120px 0px;
  }
}

.purpose-column {
  margin-top: 120px;
  flex-direction: column;
  align-items: center;
  @media(min-width:924px) {
    display: flex;
    justify-content: flex-start;
    align-items: normal;
  }
  @media(min-width:1200px) {
    display: flex;
    justify-content: flex-start;
    
    align-items: normal;
  }
}

.down-button-container {
  height: 0px;
  align-self: center;
  background-color: transparent;
  box-shadow: none;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 64px;
}

.purpose-column-header-1 {
  margin-top: 0px;
  text-align: center;
  font-family: "Heebo", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 32px;
  @media(min-width:700px) {
    font-size: 48px;
  }
}

.purpose-column-header {
  margin-top: 0px;
  text-align: center;
  font-family: "Heebo", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 20px;
  @media(min-width:924px) {
    font-size: 24px;
  }
}

.purpose-column-section {
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.purpose-column-section-2 {
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media(min-width:1100px) {
    flex-direction: row;
  }
}

.purpose-column-text {
  font-size: 22px;
  width: 100%;
  color: white;
  margin: 0px;
  text-align: center;
  font-weight: 600;
}

.purpose-column-title {
  font-size: 36px;
  width: 100%;
  margin: 0px;
  text-align: center;
  font-weight: 600;
  @media(min-width:424px) {
    font-size: 56px;
  }
  @media(min-width:924px) {
    font-size: 80px;
  }
  @media(min-width:1200px) {
    font-size: 98px;
  }
}

.purpose-column-divider {
  margin: 24px 0px;
}

.circular-text-gap {
  margin-top: 0px;
  @media(min-width:924px) {
    margin-top: 0px;
  }
  @media(min-width:1200px) {
    margin-top: 0px;
  }
}

.parallelogram {
  --p: 300px; /* control the shape (can be percentage) */
  width: 180px;
  aspect-ratio: 2/3;
  clip-path: polygon(0 var(--p),0 100%,100% calc(100% - var(--p)),100% 0);
}

.hide-on-expand {
  @media(min-width:1000px) {
    display: none;
  }
}

.map-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width:1000px) {
    flex-direction: row;
  }
}

.training-button {
  cursor: pointer;
  font-weight: 800;
  font-size: 18px;
  padding: 16px 32px;
  border-radius: 48px;
  background-color: black;
  color: white;
  border: 2px solid white;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
}

.ministry-container {
  display: block;
  @media(min-width:1000px) {
    display: flex;
    justify-content: center;
  }
}

.ministry-container-margin {
  margin-left: 0px;
  margin-top: 8px;
  @media(min-width:1000px) {
    margin-left: 128px;
    margin-top: 8px;
  }
}

.conditional-flex {
  display: block;
  @media(min-width:1350px) {
    display: flex;
    justify-content: center;
  }
}

.conditional-container {
  padding-bottom: 36px;
  @media(min-width:1160px) {
    padding-bottom: 0px;
  }
}

.conditional-flex-b {
  display: flex;
  justify-content: center;
  @media(min-width:1350px) {
    display: block;
  }
}

.conditional-flex-2 {
  display: block;
  margin: 0px 24px;
  @media(min-width:900px) {
    display: flex;
    justify-content: center;
  }
}

.conditional-justify-1 {
  justify-content: center;
  @media(min-width:900px) {
    justify-content: flex-start;
  }
}

.conditional-flex-2b {
  display: flex;
  justify-content: center;
  @media(min-width:900px) {
    display: block;
  }
}

.conditional-column-1 {
  margin: 0px 24px;
  @media(min-width:1350px) {
    margin: 0px 0px 0px 24px;
    width: 560px;
  }
}

.conditional-margin {
  margin: 0px 24px;
  @media(min-width:900px) {
    margin: 0px;
  }
}

.conditional-column-2 {
  @media(min-width:1350px) {
    width: 760px;
  }
}

.ministry-text-container {
  margin-left: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 36px;
  @media(min-width:1000px) {
    margin-left: 64px;
    width: 560px;
  }
}

.cfc-socal-influence-container {
  display: block;
  margin-top: 0px;
  padding: 8px 0px;
  @media(min-width:1000px) {
    display: flex;
    padding: 8px 64px;
  }
}

.pastor-resources-container {
  text-align: left;
  @media(min-width:1000px) {
    text-align: left;
    margin-right: 24px;
  }
}

.subtitle-text-container {
  margin-top: 0px;
  margin-left: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media(min-width:924px) {
    margin-top: 0px;
  }
  @media(min-width:1000px) {
    margin-top: 0px;
  }
}

.church-planter-img-container {
  margin: 16px;
  text-align: center;
}

.church-planter-img {
  height: 240px;
  width: 200px;
}

.cta-button {
  padding: 0px;
  text-decoration: none;
  font-weight: 800;
  color: white;
  font-size: 18px;
}

.church-planter-row {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: space-evenly;
}

.church-planter-container {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

.church-planter-text-1 {
  color: rgb(30, 150, 168);
  font-family: "Heebo", sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 4px;
}

.church-planter-text-2 {
  color: white;
  font-weight: 300;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  margin-top: 0px;
}

.purpose-container {
  @media(min-width:924px) {
    align-self: flex-start;
  }
}

.var-height-1 {
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width:600px) {
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.next-town-container {
  @media(min-width:924px) {
    align-self: flex-end;
  }
}

.social-icon {
  color: rgb(215,215,215);
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: rgb(255,255,255);
  }
}

.down-arrow {
  cursor: pointer; 
  height: 48px;
  width: 48px;
  color: white;
  &:hover {
    color: rgb(246, 68, 55);
  }
  &:focus {
    color: rgb(246, 68, 55);
  }
}

.geo-map-column {
  width: 100%;
  @media(min-width:924px) {
    width: 50vw;
  }
}
`