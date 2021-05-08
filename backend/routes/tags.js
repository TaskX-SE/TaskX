const router = require('express').Router();
let Tag = require('../models/tag.model');

router.route('/').get((req, res) => {
    Tag.find()
    .then(tags => res.json(tags))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-tag').post((req, res) => {

  const newTag = new Tag({
      googleId: req.body.googleId,
      email: req.body.email
  });

  newTag.save()
    .then(() => res.json('Tag added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/tag/:id').get((req, res) => {
    Tag.findById(req.params.id)
    .then(tag => { res.send(JSON(tag)); })
    .catch(err => res.status(400).send(err));
  
  });

  router.route('/tag-by-google-id/:googleId').get((req, res) => {

    // var Model = mongoose.model("tag.model", Tag, "tag.model");
    Tag.find({googleId: req.params['googleId']})
    .then(tag => { res.send(tag); 
    // console.log(tag)
  })
    .catch(err => res.status(400).send(err));
  });

  router.route('/tag-by-email-id/:email').get((req, res) => {

    // var Model = mongoose.model("tag.model", Tag, "tag.model");
    Tag.find({email: req.params['email']})
    .then(tag => { res.send(tag); 
    // console.log(tag)
  })
    .catch(err => res.status(400).send(err));
  });

  router.patch("/update-tag/:id", async (req, res) => {
    try {
		const tag = await Tag.findOne({ _id: req.params.id })

        if (req.body.googleId) {
			tag.googleId = req.body.googleId
		}

        if (req.body.email) {
			tag.email = req.body.email
		}

		await tag.save()
		res.send(tag)
	} catch {
		res.status(404)
		res.send({ error: "Tag doesn't exist!" })
	}
  });

  router.route('/delete-tag/:id').delete((req, res) => {

    Tag.findByIdAndRemove(req.params.id)
    .then(() => { res.send('Tag deleted'); })
    .catch(err => res.status(400).send(err));
  
  });

  router.route('/delete-tag-by-google-id/:googleId').delete((req, res) => {

    Tag.delete({googleId: req.params.googleId})
    .then(() => { res.send('Tag deleted'); })
    .catch(err => res.status(400).send(err));
  
  });

module.exports = router;