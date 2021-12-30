const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/chat', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/chat.html`);
});

app.get('/register', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/register.html`);
});

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/login.html`);
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));