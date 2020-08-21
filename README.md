# js-dev-environment
JavaScript environment from plurasight course

make sure you installed node

##Adding express  
used express to serve the project locally (npm install express)
to run node (node buildScript.srcServer.js)

##nsp check for security
install nsp in order to check for security vulnerability (npm install -g nsp)
to check for security vulnerability (nsp check)

##localtunnnel
to install localtunnel globally (npm install localtunnel -g)
to run localtunnel (lt -h "https://serverless.social" -p PORT) eg (lt -h "https://serverless.social" -p 3000)
NOTE: the address keeps changind everytime you run the command

##Automation
you can you grunt, gulp or npm Scripts
###grunt
configured under a grunt file
uses plugins
writes intermediary files between steps

###gulp
improves on gulp
in-memory streams
fast
code over configuration (you write actual js scripts)

###npm Scripts
Declared in package.json file
leverage your OS' command line
You can call separate Node scripts
Convention-based pre/post hooks
Leverage world'd largest package manager
use tools directly
No need for separate plugins hence we will use it
simpler debugging
better docd 
simple

###npm Script (package.json)
in the package.json add ("start": "node buildSripts/srcServer.js") in the script braces
to start stimply type (npm start)
to share, simply run "npm run share"

##transpilling 
used babel in (.babelrc)

##bundling
used webpack in (webpack.config.dev.js)

##Linting
###Configformart
###built-in-rules
###warnings or errors
###plugins
###use preset insteadd

eslint-watch- Eslint wrapper that adds file watch
used plain Eslint watch

##testing
###unit testing
1. Testing frameworks(mocha(no assertion library), jasmine, tape QUnit, AVA,Jest[react devs]])
Mocha
2. Asertion library( chai, expect) [declaring what to expect)
chai
3. Helper library(JSDOM:run DOM tests without a browser, Cheerion: jquery for the server)
JSDOM
4. where to run tests (browser, headless browser(phantomJS: no visible interface), in-memory DOM(JSDOM)
JSDOM(node)
5. where to put test files (cetrealized, Alongside)
Alongside
6. tests will run automatic
upon save

##contious intergration(appveyor, jekins, circleCI, semaphore, snapCI)
used Rravis and Appveyor
can allow automated deployment
Sign up or sign github account and go to travis website to signup using github
git push --set-upstream origin js-developemt-ent to push to branch

Appveyor
signup for Appveyor via there site and click add then click on new build

 
##HTTP calls(libraries)
###node
http
request

###browser
XMLHttpRequest(XHR)
jQuery
Framework-based
Fetch

###node& browser
isomorphic-fetch
xhr
Super agent
Axios

##Http mock
Nock
static JSON
Create delopment server (api-mock, Json server,Json server + Json schema faker(generates fake data), Browersync, Express)

here we will;
1. Declare our schema using Json Schema
2. Generate random data unsing Faker.js, chance.js, regexp.js
3. serve data via api using JSON Server

run(npm install -g json-server)

#Project structure
1. project structure (javascript belongs to .js file)
2. json should be injected to json from the server into the app if you want the app to behave differently to different users
consider organizing the code by feature instead of file type
3. Extract logic into POJOs(plain old javascrpt objects) not framework based objects

#Demo app
