var client = require('twilio')(process.env.TWILIOACCOUNTSID, process.env.TWILIOAUTHTOKEN);

exports.index = function(req, res) {    
    client.messages.list({
        to: process.env.TWILIONUMBER
    }, function(err, response) {
        res.render('test', {messages: response.messages});
    });
};

exports.message = function(req, res) {
    console.log(req.body.From + ': ' + req.body.Body);
};
