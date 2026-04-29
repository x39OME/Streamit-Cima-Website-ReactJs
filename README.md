# Streamit Cima Website ReactJs

## What did we use in the project?
### 1- [React Js](https://react.dev/learn/installation)
### 2- [React Slick Slider](https://react-slick.neostack.com/docs/get-started)
### 3- [React Router Dom](https://reactrouter.com/en/main)
### 4- [Router Quick Start](https://v5.reactrouter.com/web/guides/quick-start)
### 5- [FontAwesome Link Cdn](https://cdnjs.com/libraries/font-awesome)


## Packages

- npx create-react-app Streamit-Cima
- npm install react-slick --save
- npm install slick-carousel --save
- npm i react-router-dom@5
- npm start
- copy font-awsome link to ./public/index.html
- npm run build

## Deploying the app on (Netlify)

- npm run build
- open build or dist file
- open [Netlify](https://www.netlify.com/)
- add new site Deploy manually
- drag & drop dist file
- change site name
- [Link](https://streamit-cima-reactjs.netlify.app/)

## Deploying the app on Github(gh-pages)

- npm run build
- npm install gh-pages --save-dev
- package.json add
  ```
  "homepage":"https://x39ome.github.io/Streamit-Cima-Website-ReactJs",
  "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     "start": "react-scripts start",
     "build": "react-scripts build",        
- git init
- git remote add origin https://github.com/x39OME/essam.git
- npm run deploy
- [Link](https://x39ome.github.io/Streamit-Cima-Website-ReactJs/#/)
### File .gitignore 
```
  مهم لاجل تجاهل رفع ملفات النود للgit
  # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```        
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
