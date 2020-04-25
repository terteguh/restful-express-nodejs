# restful-express-nodejs

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

## Install Express and Eslint

```console
node --version
npm init
npm i express
npm install eslint --save-dev
```

## Config eslint

```console
npx eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? CommonJS (require/exports)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1
? Would you like to install them now with npm? (Y/n) y
```

## Change to LF on VS Code

indent change to 2 using space

## Add script lint on package.json

"lint": "eslint",

## Run eslint

npm run lint index.js

## update script lint on package.json

"lint": "eslint .",

## Test run eslint without index.js

npm run lint

## Install nodemon

npm i nodemon

## Add script start on package.json

"start": "nodemon app.js",

## Add nodemon config on package.json

```properties
  "nodemonConfig": {
    "restartable": "rs",
    "ignore": [
      "node_modules/**/node_modules"
    ],
    "delay": "2500",
    "env": {
      "NODE_ENV": "development",
      "PORT": 4000
    }
  }

```

## start index.js

npm start

## Try edit index.js

express will automatically restart and apply change
