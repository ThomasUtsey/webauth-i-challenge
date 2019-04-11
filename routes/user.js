const express = require('express');
const router = express.Router();
const knex = require('knex');
const crypt = require('bcryptjs')

const db = require('../data/dbConfig.js');
const Users = require('../data/users_model.js')

const errors = { 
  '19':'Another entree has the same value no duplicates'
}

router.post('/register',(req,res)=>{
let user = req.body;
const hash = crypt.hashSync( req.body.password);
user.password=hash;
Users.add(user)
  .then(saved => {
    res.status(201).json(saved);
  })
  .catch(error => {res.status(500).json(error)});
});

router.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/api/users', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


// const hash = bcrypt.hashSync( , );
//override

module.exports = router;