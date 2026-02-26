//CORS配置
const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors({origin:"https://shunfengbali.github.io/Website A01"}));

//连接

app.get('/', (req, res) => res.send('Express跑起来啦！'));
module.exports = app;