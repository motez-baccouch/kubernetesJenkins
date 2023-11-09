const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Its me mario with a new hat ( new version 1.1)');
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});

module.exports = app;