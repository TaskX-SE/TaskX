const router = require('express').Router();
let Session = require('../models/session.model');

router.route('/').get((req, res) => {
    Session.find()
    .then(sessions => res.json(sessions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-session').post((req, res) => {

  const newSession = new Session({
      sessionDuration: req.body.sessionDuration,
      sessionDeadline: req.body.sessionDeadline
  });

  newSession.save()
    .then(() => res.json('Session added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/session/:id').get((req, res) => {

    Session.findById(req.params.id)
    .then(session => { res.send(session); })
    .catch(err => res.status(400).send(err));
  
  });

  router.patch("/update-session/:id", async (req, res) => {
    try {
		const session = await Session.findOne({ _id: req.params.id })

        if (req.body.sessionDuration) {
			session.sessionDuration = req.body.sessionDuration
		}
        if (req.body.sessionDeadline) {
			session.sessionDeadline = req.body.sessionDeadline
		}

		await session.save()
		res.send(session)
	} catch {
		res.status(404)
		res.send({ error: "Session doesn't exist!" })
	}
  });

  router.route('/delete-session/:id').delete((req, res) => {

    Session.findByIdAndRemove(req.params.id)
    .then(() => { res.send('Session deleted'); })
    .catch(err => res.status(400).send(err));
  
  });

module.exports = router;