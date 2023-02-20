const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// This middleware tells the router to use the files in the public folder.
// It must be used in order to for the app to use bundle.js.
app.use(express.static(path.join(__dirname, '../public')));

// Catch-all route that sends index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

module.exports = app;
