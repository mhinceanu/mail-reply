const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/dictionary', (req, res) => {
  res.send({ test: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Devserver is up! => http://localhost:${port}`);
});
