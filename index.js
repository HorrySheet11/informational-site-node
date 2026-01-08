const express = require('express');
const path = require('node:path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/about', (req,res) => {
  res.sendFile(`${__dirname}/public/about.html`);
});

app.get('/contact-me', (req,res) => {
  res.sendFile(`${__dirname}/public/contact-me.html`);
});

app.get('/{*splat}', (req,res) => {
  res.sendFile(`${__dirname}/public/404.html`);
});

// app.use((req,res) => {
//   res.status(404);
//   res.sendFile(`${__dirname}/public/404.html`);
// });

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
