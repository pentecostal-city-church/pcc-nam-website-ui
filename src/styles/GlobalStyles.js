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
    height: 375px;
    width: 600px;
  }
  @media(min-width:600px) {
    height: 450px;
    width: 650px;
  }
  @media(min-width:700px) {
    height: 525px;
    width: 675px;
  }
  @media(min-width:800px) {
    height: 600px;
    width: 700px;
  }
  @media(min-width:924px) {
    height: 550px;
    width: 500px;
  }
  @media(min-width:1000px) {
    height: 650px;
    width: 550px;
  }
  @media(min-width:1100px) {
    height: 650px;
    width: 600px;
  }
  @media(min-width:1200px) {
    height: 750px;
    width: 600px;
  }
  @media(min-width:1300px) {
    height: 700px;
    width: 700px;
  }
  @media(min-width:1400px) {
    height: 700px;
    width: 750px;
  }
  @media(min-width:1500px) {
    height: 750px;
    width: 750px;
  }
  @media(min-width:1600px) {
    height: 750px;
    width: 900px;
  }
  @media(min-width:1700px) {
    height: 750px;
    width: 950px;
  }
  @media(min-width:1800px) {
    height: 750px;
    width: 1050px;
  }
  @media(min-width:1900px) {
    height: 750px;
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
  font-weight: 600;
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
  max-width: 28vmin;
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
  @media(min-width:924px) {
    display: flex;
  }
}

.purpose-column {
  margin-top: 36px;
  flex-direction: column;
  align-items: center;
  @media(min-width:924px) {
    display: flex;
    justify-content: flex-start;
    margin-left: 32px;
    margin-top: 180px;
    align-items: normal;
  }
  @media(min-width:1200px) {
    display: flex;
    justify-content: flex-start;
    margin-left: 32px;
    margin-top: 180px;
    align-items: normal;
  }
}

.purpose-column-header {
  margin-top: 0px;
  font-family: sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 20px;
  @media(min-width:1200px) {
    font-size: 28px;
  }
}

.purpose-column-section {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(min-width:924px) {
    width: 400px;
    align-items: normal;
  }
  @media(min-width:1200px) {
    width: 560px;
    align-items: normal;
  }
}

.purpose-column-title {
  font-size: 32px;
  margin: 0px;
  text-align: center;
  font-weight: 600;
  @media(min-width:424px) {
    width: 400px;
  }
  @media(min-width:924px) {
    font-size: 40px;
    text-align: left;
    width: 400px;
  }
  @media(min-width:1200px) {
    font-size: 48px;
    text-align: left;
    width: 400px;
  }
}

.purpose-column-divider {
  margin: 24px 0px;
}

.circular-text-gap {
  margin-top: 0px;
  @media(min-width:924px) {
    margin-top: 36px;
  }
  @media(min-width:1200px) {
    margin-top: 0px;
  }
}

.map-column {
  margin-top: 172px;
  @media(min-width:1200px) {
    margin-top: 96px;
  }
}

.subtitle-text-container {
  margin-top: 32px;
  margin-left: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media(min-width:924px) {
    margin-top: 64px;
  }
  @media(min-width:1000px) {
    margin-top: 64px;
  }
}

.church-planter-img-container {
  margin: 16px;
  width: 20%;
  text-align: center;
}

.church-planter-img {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 2px solid lightblue;
}

.church-planter-row {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: space-between;
}

.church-planter-container {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

.church-planter-text-1 {
  color: rgb(30, 150, 168);
  font-family: sans-serif;
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 8px;
}

.church-planter-text-2 {
  color: white;
  font-weight: 300;
  font-size: 16px;
  font-family: sans-serif;
  margin-top: 0px;
}
`