# Typescript Angular2 + Node.js Starter Project with Linting, Minification, and Bundling

## About

* Angular 2 Code in Typescript with SystemJS for module loading
   
* Styles in CSS
    * Global styles are concatenated
* Project building and bundling with Gulp
    * Linting runs before compilation, minification, and bundling
    * Express serves static files from "public" directory
    * "public/dist" contains our compiled, bundled, and minified "app"
    * "public/lib" contains our compiled, bundled, and minified dependencies

## Installation
* `npm install -g gulp typings`: installs Gulp and Typings globally
* `npm install`: installs node modules locally

## Build and Run
### Automatically
* `gulp`: lints, builds, and restarts web server on changes
    (Branch changes will cause server to crash; stop and start before doing so)

If no code has changed since your last build, you can just run:

* `gulp serve`: starts web server with a watcher that will recompile any changed files
    (will not trigger recompilation on any files changed before task starts)

### Manually
1. `gulp build`: lints, compiles, and compresses static files
2. `npm start`: starts web server on port 8080
3.  Repeat steps 1 & 2 on any file change

## Testing with Jasmine
* `npm run test`: watches and compiles files on changes, opens browser to see test runs

 ![Expect](http://github/guilhermesanches/angular2-nodejs/tests/test.png "Expect")

* `gulp clean:tests`: optionally clear test build directory

## TODO

* `Include SCSS and Materialize framework`
