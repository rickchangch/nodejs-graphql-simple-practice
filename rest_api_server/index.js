/**
 * require pkg
 */
var express = require('express');
var bodyParser = require('body-parser');

/**
 * global variable
 */
const PORT = 3000;
var app = express();

/**
 * setup middleware
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded, extended=true allow input nested obejct (ex. {a: {b: 0}})
app.use(bodyParser.urlencoded({ extended: true }));

// hardcode user info
var userList = [
  {
    name: 'Rick',
    age: 87,
  },
];

// get
app.get('/users/:id', function(req, resp) {

  // show query string
  console.log(req.query);
  // show path params
  console.log(req.params);

  let id = req.params.id || '';

  resp.status(200).send(userList[id] || {});
});

// list
app.get('/users', function(req, resp) {
  resp.status(200).send(userList);
});

// create
app.post('/users', function(req, resp) {

  // get body params
  let bodyParams = req.body || {};

  // append to userList
  userList.push(bodyParams);

  resp.sendStatus(201);
});

// update
app.patch('/users/:id', function(req, resp) {

  let id = req.params.id || '';
  let bodyParams = req.body || {};

  // updated
  userList[id] = bodyParams;

  resp.sendStatus(200);
});

// delete
app.delete('/users/:id', function(req, resp) {

  let id = req.params.id || '';

  // remove from userList
  userList.splice(req.params.id, 1);

  resp.sendStatus(204);
});

// activate server
app.listen(PORT, function() {
  console.log('The server is activating now and listening on port %d!', PORT);
});
