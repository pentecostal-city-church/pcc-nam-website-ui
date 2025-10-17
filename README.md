# SOCAL NAM WEBSITE

**Note:** This repo uses [Gatsby v4](https://www.gatsbyjs.com/gatsby-4/).

This repo contains an example business website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Decap CMS](https://www.decapcms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## INTRO

- This codebase is used for the [SOUTHERN CALIFORNIA NORTH AMERICA MISSIONS](https://www.socalnam.org/) website.


## Prerequisites

- Minimal Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)

## Getting Started (Recommended)

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ npm i
$ gatsby clean
$ npm run start
```

### Deployment

Stage any changes and then commit to main branch and push.

```
$ git add .
$ git commit -m "[commit message goes here]"
$ git push
```

Deploy changes to github pages

```
$ gatsby clean
$ npm run deploy
```

Go to the [repo page settings](https://github.com/pentecostal-city-church/pcc-nam-website-ui/settings/pages) 
and enter www.socalnam.org into the custom domain and save.


# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

# CONTACT

Developers:
Austin Liu - austin.th.liu@gmail.com