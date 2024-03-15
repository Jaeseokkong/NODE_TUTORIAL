const modeles = require('../models');

exports.get_landing = function(req, res, next) {
    res.render('landing', {title: 'Express'})
}

exports.submit_landing = function(req, res, next) {
    console.log('lead email:', req.body.lead_email);
    return modeles.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/');
    })
}