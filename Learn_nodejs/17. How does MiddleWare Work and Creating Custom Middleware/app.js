const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.banana = 'banana';
    next();
})

app.get('/', (req, res) => {
    console.log(res.banana);
    res.send('MiddleWare')
});

app.listen(3000)
