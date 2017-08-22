const http = require('http');
var   express = require('express');
var   app = express();
var   server = require('http').createServer(app);
var   bodyParser = require('body-parser');
var   config = require('./config');
var   Twit = require('twit');

var T = new Twit({
  consumer_key:         config.key.consumer_key,
  consumer_secret:      config.key.consumer_secret,
  access_token:         config.key.access_token,
  access_token_secret:  config.key.access_token_secret
});

T.post('statuses/update', { status: 'Test Status for app 🚀' }, function(err, data, response) {
  console.log(data); // posting status
})

//
// var stream = T.stream('statuses/filter', { follow: 897086696193269760 });
// stream.on('tweet', function (tweet) {
//   console.log(tweet.text);
// });


  // var stream = T.stream('statuses/filter', { track: 'sentweet' });
  // stream.on('tweet', function (tweet) {
  //   // process.stdout.write(tweet.id);
  //   console.log(tweet);
  // });


// T.get('search/tweets', { q: 'siwalik', count: 5 }, function(err, data, response) {
//   console.log(data)
// })

app.use(bodyParser.urlencoded({
  extended: true
}));


const hostname = 'localhost';
const port = 8055;

app.use('/', express.static('html'));
app.get("/", function (req, res) {
  console.log(config.key);
  res.sendFile(__dirname + '/html/index.html');
});
app.post('/myaction', function (req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
