# primer
A ReactJS primer repo with focus on idiomatic principles and the component life cycle. This repo contains a simple
React Github search utility built using React current best practices (to the extent of my knowledge). PR's and comments are
welcome if I get it wrong!

## Build
An idomatic React application will use a build system to transpile JSX into JS for running inside the browser. This
project uses [gulp](http://gulpjs.com/) and [webpack](http://webpack.github.io/) to accomplish this task.

## ES6
React 0.13 introduces the ability to write your React application use standard ES6 syntax. 
The old React.createClass method is still supported, but in order to be idiomatic and future-proof, this repo uses
the newly introduced syntax. The ES6 code is transpiled to ES5 using [babel](https://babeljs.io/).

## Architecture overview

### Views

The component is built as a Single-Page Application or SPA. There is one [index.html](https://github.com/TucsonReactJS/primer/blob/master/app/index.html) file, which contains simple meta tags and stylesheets, and provides a single div to mount our React application.

### client.js

The [client.js](https://github.com/TucsonReactJS/primer/blob/master/app/client.js) file is the main entry point in our application and does a few key things.
* Gets a reference to the main [app.jsx](https://github.com/TucsonReactJS/primer/blob/master/app/app.jsx) component
* Gets a reference to the 'app' DOM node
* Calls ```React.render(<App/>,mountNode)``` to render the application into the node 

### app.jsx

The [app.jsx](https://github.com/TucsonReactJS/primer/blob/master/app/app.jsx) file is the top-level component of out React application. It renders a container, row and an instance of [RepoListContainer](https://github.com/TucsonReactJS/primer/blob/master/app/repo_list/repo_list_container.jsx)
. It uses the [componentWillMount](http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount) as an example of performing some work before the render method is called. In this case a simple ```isMobile()``` check is done, and the state is set accordingly.
