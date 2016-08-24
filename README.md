# Zen Board
This project has three purposes:

1. Allow me a significant project to explore React\Redux Stack
2. Allow me to create an example driven bootstrap project that establishes best practices with a focus on developer ergonomics and proves out the following common UX Application needs

    - [x] Routing with a stateful bootstrap menu
    - [ ] Async data access patterns
         - [ ] Promise based
            - [ ] Pass data between dependent calls
            - [ ] Parallel calls with busy wait
            - [x] Good error handling experience
            - [ ] Explore reducing boiler plate using https://github.com/agraboso/redux-api-middleware
         - [x] RxJs based, is this worth it?
         - [x] Generator based, not worth it. Not ready for prime time due to performance of transpiled generators and learning curve
    - [ ] Forms
        - [x] Establish good pattern for forms with bootstrap
        - [x] Establish good pattern for validations with bootstrap
          - [x] Field level
          - [x] Form level
        - [ ] Explore all inputs
          - [ ] Text
            - [ ] Masked input with placeholder
          - [ ] Combo box
            - [ ] Explore this lib https://jedwatson.github.io/react-select/
            - [ ] Auto complete
          - [ ] Checkbox list
          - [ ] Radio Buttons
        - [ ] Dynamic
    - [ ] Grid
        - [ ] Slick grid based grid with virtual scrolling
    - [ ] Integrate non react\redux third party component
    - [ ] Establish a debugging flow with good ergonomics
        - [x] Hot Module Replacement, not worth it IMHO. It's unreliable and has you constantly refreshing just in case. I don't trust it so it's of little value to me and I recommend against it
        - [x] Webpack config allowing for chrome workspaces support so you can edit source in chrome
        - [x] Redux dev tools support
        - [ ] Validate flow works with CSS
    - [ ] Establish Inline CSS best practices
    - [ ] Should we eliminate all HTML files? i.e. no index.html
    - [ ] Error handling
        - [ ] Global error page
        - [ ] 404 Page
        - [ ] Inline errors for non-validation errors (or pop up style like toaster)
    
3. Maximize time investment and value of project by building a real product as part of the effort. This will give us real requirements to work and potentially create a product that has value in the market.

## Get Started
Note: This architecture is based on [Building Applications in React and Redux in ES6](http://www.pluralsight.com/author/cory-house) on Pluralsight

1. **Install [Node 6](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `https://github.com/vicesoftware/zen-board-redux` or [download the zip](https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd https://github.com/vicesoftware/zen-board-redux`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.

## Patterns Used
| **Pattern** | **Why** | **Where** |
|----------|-------|-------|
|Jack Hsu| Standardize and simplify pattern for creating actions, reducers and action creators | http://jaysoo.ca/2016/02/28/organizing-redux-application/ |
|Flux Standard Actions| Standardize action schema | https://github.com/acdlite/flux-standard-action |
|Corey House Pluralsight Course| This is a must watch for anyone working in this code base as it was used as the foundation that this was created from | https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents |
|Auth example (react + redux + react-router)| An approach for Auth using Redux and React | https://gist.github.com/iNikNik/1eabfc6bcc132384368c |

## Debugging
A key focus of this project is improving developer ergonomics and this section outlines some tools that this develoment approach are optomized for.

### Errors
Below are some confusing errors that can happen and likely causes.

#### actions.js:5 Uncaught TypeError: Cannot read property 'actions' of undefined
When this occurs it usually means there is a problem with your bundle. The image below shows what this looks like. It's easy to loose time on this one. Some things to try:

1. Kill your npm start (watch) that is running using ctrl+c (or close the terminal\command prompt) and then rerun npm start and fix all the errors and warnings.
2. If doing 1) above doesn't fix it then review a diff of your changes and looking for module resolution problems. Sometimes if you rename files this can happen as it will change what needs to be specfied in your import statements.
3. Shelf your changes and then start resetting files until your build works again to isolate what file is causing the problem.

![image](https://cloud.githubusercontent.com/assets/10080111/17644444/7e62d5d6-614c-11e6-8a79-26e16517e8bd.png)


### Web Storm
I've tried a few editors and I'm finding that Web Storm has a great React\Redux experience. I find that it requires less configuration than Atom or Sublime as it will auto-detect things for you and ask if you'd like to enable different plugins. For example, it will detect that your Javascript files contain JSX and ask you if you'd like to enable JSX harmony which will give you syntax highlighting and beautification.

#### Live Templates
This feature allows easily creating templates for code patterns that you repeat often. Below are useful ones for this architecture. To add a template go to ```Preferences => Editor => File and Code Templates``  as shown below and then click the green plus to add a new one.

![image](https://cloud.githubusercontent.com/assets/10080111/17255148/953e3dca-557d-11e6-816d-2145cdefc7be.png)

It's highly recomended that you add the templates that follow and when adding a new file you will see the templates you added as options as shown below. See the Corey House course in patterns section for more details and examples.

![image](https://cloud.githubusercontent.com/assets/10080111/17255352/7bc8d61a-557e-11e6-80bf-626cc9b4afc0.png)

##### React Redux Component
```
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class $NAME extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    );
  }
}

$NAME .propTypes = {
  // actions: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators($NAME Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)($NAME);
```

##### React Redux Reducer
```
import initialState from "../../reducers/initialState";
import * as types from "./actionTypes";

export default function reducer(state = initialState.myState, action) {
  switch (action.type) {
    case types.MY_ACTION:
      return state;

    default:
      return state;
  }
}
```

##### React Stateless Component
```
import React, {PropTypes} from "react";

const $NAME = ({prop1, prop2}) => {
	return (

	);
};

${NAME}.propTypes = {
	// name: PropTypes.string.isRequired
};

export default $NAME;
```

##### Component Index File
```
import * as actions from "./actions";
import * as components from "./components";
import * as constants from "./constants";
import reducer from "./reducer";
import * as selectors from "./selectors";

export default {
  actions, 
  components, 
  constants, 
  reducer, 
  selectors
};
```

##Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
|bootstrap 4 applicaiton theme|http://themes.getbootstrap.com/apps/downloads/orders/ryan%2540vicesoftware.com/2735013|
|jquery|Only used to support toastr|
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-router-redux|Keep React Router in sync with Redux application state|
|redux|Library for unidirectional data flows |
|redux-thunk|Async redux library|
|toastr|Display messages to the user|

##Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-register|Register Babel to transpile our Mocha tests|
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|colors|Adds color support to terminal |
|compression|Add gzip support to Express|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|expect|Assertion library for use with Mocha|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build | 
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|mocha| JavaScript testing library |
|nock| Mock HTTP requests for testing |
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Warn when Redux state is mutated|
|redux-mock-store|Mock Redux store for testing|
|rimraf|Delete files |
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |

## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: babel-node: command not found.
2. Make sure the path doesn't include any spaces. Spaces in path will cause issues on Windows.
3. Use Node 5.11.1 if on Windows. Node 6 has issues on some Windows machines.
4. Don't run the project from a symbolic link. It will cause issues with file watches.

## Requirements
It's a task\process managment tool optomized for users who's workflows revolve around

### Features

1. Conversations with important elements similar to stackoverflow 
  a. example: Get approval from CEO and CFO for a design
2. Actionable conversations
  a. example: After discussing viability of a client need the conversation becomes actionable and can be assinged to resources and tracked through task managment process.
3. Custom task management process similar to Trello
4. Support tasks with due dates 
  a. that are relative to process milestones
  b. that are absolute
5. Support notifications
6. Support versioned file uploads that can be organized around tasks and conversations and support easy sharing with others
  a. example: Allow user to discuss requirements with client, turn those requirements into a task and then attach the files that are delievrerables to that task and then allow the user to easily share those files with 3rd party vendors (example send photos to be printed, send engineering diagrams to manufactures for bids, etc...)
7. Have a calendar
8. Have a file list

### Mockups
Below are the mock ups for this product.

#### Projects
![Projects](https://vicesoftware.mybalsamiq.com/mockups/3762032.png?key=da0d42b133210226af3be39ba3b44f68b4efd055)

#### Tasks
![Tasks](https://vicesoftware.mybalsamiq.com/mockups/3762053.png?key=3c9813338ae229dfaf5caad7d3f2c6b0d69d8029)

#### Task
![Task](https://vicesoftware.mybalsamiq.com/mockups/3762070.png?key=04b76104443847abcf375162dbb47465411f8116)

#### Discussions
![Discussions](https://vicesoftware.mybalsamiq.com/mockups/3764954.png?key=8771f3b9f91e2139efead8a196a23fa3352ca58e)

#### Files
![Files](https://vicesoftware.mybalsamiq.com/mockups/3813935.png?key=02001b769c03afcd28f8ac2af4389ef064236d2c)

#### Calendar
![Calendar](https://vicesoftware.mybalsamiq.com/mockups/3820494.png?key=af5fef1381aa8ffe7cbc28abfc260205ed64fc96)
