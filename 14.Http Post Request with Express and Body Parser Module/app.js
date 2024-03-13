const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.post('/', (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        pwd: Joi.string().min(5).max(10).required()
    });

    const result = schema.validate(req.body)
    if (result.error) {
        console.log(result.error)
        res.send('an error has occurred');
    }
    console.log(result);
    res.send('successfully posted data')
}); 

app.listen(3000)
