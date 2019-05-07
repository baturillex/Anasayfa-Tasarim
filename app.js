const express = require('express');
//const ejs = require('ejs');
const bp = require('body-parser');

const app = express();
const port = 3000;
const login = require('./loginOps');

app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', login.userLogin);
app.get('/etkinlikyonet', login.etkinlikYonet);

app.listen(port, () => console.log(`Port Çalışıyor :  ${port}!`));
