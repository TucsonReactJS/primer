# primer
A ReactJS primer repo with focus on idiomatic principles and the component life cycle. This repo contains a simple
React Github searcher built using React current best practices (to the extent of my knowledge). PR's and comments are
welcome if I get it wrong!

## Build
An idomatic React application will use a build system to transpile JSX into JS for running inside the browser. This
project uses [gulp](http://gulpjs.com/) and [webpack](http://webpack.github.io/) to accomplish this task.

##ES6
React 0.13 introduces the ability to write your React application use standard ES6 syntax. 
The old React.createClass method is still supported, but in order to be idiomatic and future-proof, this repo uses
the newly introduced syntax. The ES6 code is transpiled to ES5 using [babel](https://babeljs.io/).




