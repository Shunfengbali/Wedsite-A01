const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Express跑起来啦！'));
module.exports = app;