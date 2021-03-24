const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-user').post((req, res) => {

  const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      phone_no: req.body.phone_no,
      university: req.body.university,
      xp: req.body.xp
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/user/:id').get((req, res) => {

    User.findById(req.params.id)
    .then(user => { res.send(user); })
    .catch(err => res.status(400).send(err));
  
  });

  router.patch("/update-user/:id", async (req, res) => {
    try {
		const user = await User.findOne({ _id: req.params.id })

		if (req.body.name) {
      user.name = req.body.name;
		}
		if (req.body.password) {
      user.password = req.body.password;
		}
        if (req.body.gender) {
          user.gender = req.body.gender;
        }
        if (req.body.phone_no) {
          user.phone_no = req.body.phone_no;
        }
        if (req.body.university) {
          user.university = req.body.university;
        }

		await user.save()
		res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
  });


  router.route('/delete-user/:id').delete((req, res) => {

    User.findByIdAndRemove(req.params.id)
    .then(() => { res.send('User deleted'); })
    .catch(err => res.status(400).send(err));
  
  });

module.exports = router;