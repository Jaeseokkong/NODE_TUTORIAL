const models = require('../models');

exports.get_landing = function(req, res, next) {
    res.render('landing', {title: 'Express'})
}

exports.submit_landing = function(req, res, next) {
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = function(req, res, next) {
    models.Lead.findAll().then(leads => {
        console.log(leads)
        res.render('landing', { title: 'Express', leads: leads });
    })
}

exports.show_lead = function(req, res, next) {
    return models.Lead.findOne({
        where : {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead: lead});
    })
}

exports.show_edit_lead = function(req, res, next) {
    return models.Lead.findOne({
        where : {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead: lead });
    })
}

exports.edit_lead = function(req, res, next) {
    const lead_id = req.params.lead_id;
    const lead_email = req.body.lead_email;

    return models.Lead.update({
        email: lead_email
    }, {
        where : {
            id: lead_id
        }
    }).then(result => {
        console.log(result)
        res.redirect('/lead/' + lead_id)
    })
}

exports.delete_lead = function(req, res, next) {
    const lead_id = req.params.lead_id;

    return models.Lead.destroy({
        where : {
            id: lead_id
        }
    }).then(result => {
        res.redirect('/leads')
    })
}

exports.delete_lead_json = function(req, res, next) {
    const lead_id = req.params.lead_id;

    return models.Lead.destroy({
        where : {
            id: lead_id
        }
    }).then(result => {
        res.send({ msg: "Success"})
    })
}