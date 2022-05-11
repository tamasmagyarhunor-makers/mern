const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Makers'));

const port = process.env.PORT || 8082;

app.listen(port,  () => console.log(`Server running on port ${port}`));