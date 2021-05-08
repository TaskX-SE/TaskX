const router = require('express').Router();
let Feedback = require('../models/feedback.model');
var sendEmail = require('../email.js');

router.route('/').get((req, res) => {
    Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-feedback').post((req, res) => {

  const newFeedback = new Feedback({
      name: req.body.name,
      email: req.body.email,
      response: req.body.response
  });

  newFeedback.save()
    .then(() => {
    res.json('Feedback added!')
    sendEmail.feedback(newFeedback.name, newFeedback.email, newFeedback.response);

})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/feedback/:id').get((req, res) => {
    Feedback.findById(req.params.id)
    .then(feedback => { res.send(JSON(feedback)); })
    .catch(err => res.status(400).send(err));
  
  });

 
module.exports = router;