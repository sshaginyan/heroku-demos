const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


let count = 0;
app.get('/api', function (req, res) {
  console.log(count++);
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, error => {
  if(error) throw error;
  console.log(`Server started on port ${PORT}`);
});
