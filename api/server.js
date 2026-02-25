const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// 模拟数据库
const users = [];

// 中间件配置
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    if (users.some(u => u.username === username)) {
        return res.status(400).send('用户名已存在');
    }

    users.push({ username, password });
    res.send(`注册成功！欢迎 ${username}`);
});

// 登录路由
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user || user.password !== password) {
        return res.status(401).send('用户名或密码错误');
    }

    res.send(`登录成功！欢迎回来 ${username}`);
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});