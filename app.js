const express = require('express');
const app = express();
const port = 3000;

// Function 1: Sending plain text response
app.get('/text', (req, res) => {
  res.send('Hello, this is a plain text response!');
});

// Function 2: Sending JSON response
app.get('/json', (req, res) => {
  const data = {
    message: 'Hello, this is a JSON response!',
    status: 'success'
  };
  res.json(data);
});

// Function 3: Setting status code
app.get('/status', (req, res) => {
  res.status(404).send('Not Found - Custom Status Code');
});

// Function 4: Sending HTML response
app.get('/html', (req, res) => {
  const htmlContent = '<h1>Hello, this is an HTML response!</h1>';
  res.send(htmlContent);
});

// Function 5: Redirecting to another route
app.get('/redirect', (req, res) => {
  res.redirect('/text');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
