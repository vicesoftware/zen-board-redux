# Zen Board
This project has three purposes:

1. Allow me a significant project to explore React\Redux Stack
2. Allow me to create an example driven bootstrap project that establishes best practices with a focus on developer ergonomics and proves out the following common UX Application needs

    - [x] Routing with a stateful bootstrap menu
    - [ ] Async data access patterns
         - [ ] Promise based
            - [ ] Pass data between dependent calls
            - [ ] Parallel calls with busy wait
            - [ ] Good error handling experience
            - [ ] Explore reducing boiler plate using https://github.com/agraboso/redux-api-middleware
         - [x] RxJs based, is this worth it?
         - [x] Generator based, not worth it. Not ready for prime time due to performance of transpiled generators and learning curve
    - [ ] Forms
        - [ ] Establish good pattern for forms with bootstrap
        - [ ] Establish good pattern for validations with bootstrap
          - [ ] Field level
          - [ ] Form level
        - [ ] Explore all inputs
          - [ ] Text
            - [ ] Masked input with placeholder
          - [ ] Combo box
            - [ ] Explore this lib https://jedwatson.github.io/react-select/
            - [ ] Auto complete
          - [ ] Checkbox list
          - [ ] Radio Buttons
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
|ducks| Standardize and simplify pattern for creating actions, reducers and action creators | https://github.com/erikras/ducks-modular-redux |
|Flux Standard Actions| Standardize action schema | https://github.com/acdlite/flux-standard-action |


##Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
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
