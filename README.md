## CRUD Practice Repo

## Objectives:

- Generating an express app
  - command line:
    - express crud-practice
    - cd crud-practice && npm install
    - nodemon
- Writing full CRUD of a resource (including simple validations, pre-filling forms on validations and edit forms)
  - set up routes and views
    - get concerts index page
    - get new concert page
    - set up database (see below)
    - post new concert
- Basic CSS
- Wiring up a database
  - command line:
    - npm install monk --save
  - add dotenv file (see below)
  - add connection to database in index.js
    ```js
    var db = require('monk')(process.env.MONGO_URI_CONCERTS)
    var concertCollection = db.get('concerts')
    ```
- ENV variables, dotenv etc...
  - command line:
    - npm install dotenv --save
    - touch .gitignore
    - touch .env
  - add node_modules and .env to gitignore
  - require in app.js
    ```js
    require(‘dotenv’).load()
    ```
  - access variables with process.env
  - set variables on production servers (see deploying to heroku below)
- Deploying to Heroku
