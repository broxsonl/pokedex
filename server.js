var express = require('express'),
  port = 3000,
  app = express();

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
