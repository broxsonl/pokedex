var express = require('express'),
  // requestProxy = require('express-request-proxy'),
  port = 3000,
  app = express();

app.use(express.static('./'));

// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//   response.sendFile('index.html', {root: '.'});
// });

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});