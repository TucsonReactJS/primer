# primer
A React primer repo with focus on idiomatic principles and the component life cycle. This repo contains a simple
React Github search utility built using React current best practices (to the extent of my knowledge). PR's and comments are
welcome if I get it wrong!

[![Dependencies Status][dependencies-image]][dependencies-url]
[![devDependency Status][dev-dependencies-image]][dev-dependencies-url]

## Build
An idomatic React application will use a build system to transpile JSX into JS for running inside the browser. This
project uses [gulp](http://gulpjs.com/) and [webpack](http://webpack.github.io/) to accomplish this task. To build this
project type
* Clone the repo ```git clone https://github.com/TucsonReactJS/primer.git```
* Install gulp globally ```npm install -g gulp```
* change into the primer directory ```cd primer```
* install dependencies ```npm install```
* build and watch using browsersync ```gulp```

## ES6
React 0.13 introduces the ability to write your React application using standard ES6 syntax. 
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

### repo_list/repo_list_container.jsx

The RepoListContainer is a [container](https://medium.com/@learnreact/container-components-c0e67432e005) component. It is responsible for fetching data from the remote endpoint, and passing it down to the it's child components. It uses [componentDidMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount) and [componentWillUnmount](http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount) to fetch data and clean up a debounce method. It has a [RepoList](https://github.com/TucsonReactJS/primer/blob/master/app/repo_list/repo_list.jsx) and [RepoListFilter](https://github.com/TucsonReactJS/primer/blob/master/app/repo_list/repo_list_filter.jsx) as children.

### repo_list/repo_list_filter.jsx

The RepoListFilter is responsible for taking the users input to change the sort and a simple 'stars' filter. It uses [shouldComponentUpdate](http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate) to prevent any unnecessary rendering.

### repo_list/repo_list.jsx

The RepoList is responsible for mapping and rendering a list of [RepoListItem](https://github.com/TucsonReactJS/primer/blob/master/app/repo_list/repo_list_item.jsx). Additionally, this component uses the [componentWillReceiveProps](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops) lifecycle method to compute whether a particular repo has trended up or down since the last request.

### repo_list/repo_list_item.jsx

The RepoListItem is responsible for rendering a single repo item. It uses  [TrendingUpArrow](https://github.com/TucsonReactJS/primer/blob/master/app/common/trending_up_arrow.jsx) and [TrendingDownArrow](https://github.com/TucsonReactJS/primer/blob/master/app/common/trending_down_arrow.jsx) components to show trending status. The RepoListItem uses [componentWillUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate) and [componentDidUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate) to access the raw DOM element and pass it to an animation library. If the previous or upcoming props don't match, then the item will "transition" into the change by sliding out. This a little contrived, but is helpful to visualize the lifecycle method.

### common/trending_up_arrow.jsx

A simple styled up arrow

### common/trending_down_arrow.jsx

A simple styled down arrow

[dependencies-image]:https://david-dm.org/TucsonReactJS/primer.svg
[dependencies-url]:https://david-dm.org/TucsonReactJS/primer#info=dependencies
[dev-dependencies-image]:https://david-dm.org/TucsonReactJS/primer/dev-status.svg
[dev-dependencies-url]:https://david-dm.org/TucsonReactJS/primer#info=devDependencies
