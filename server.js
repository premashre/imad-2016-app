var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
    });
    
app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
    });
    
app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
    });
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/arizona', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', "https://media-cdn.tripadvisor.com/media/photo-s/03/9a/0e/c2/horseshoe-bend.jpg"));
});

app.get('/ui/cloud', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', "https://clipartion.com/wp-content/uploads/2016/04/best-storm-cloud-clipart.gif"));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
