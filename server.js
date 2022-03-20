// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//first challenge
app.get("/api/:date?", function (req, res) {
  let date = req.params.date;
  //console.log(req);
  console.log(date);
  //console.log(req.params.date)

  //function createDateAsUTC(date) {
  //  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
//}

  let dateObject =  new Date(date);
  //console.log(dateObject);
  //console.log(dateObject.getTime());
  //console.log(dateObject.toUTCString());

  res.json({
    unix: dateObject.getTime(),
    utc: dateObject
  });
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
