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

router.post('/login', (req, res) => {
  let { user, password } = req.body;

  Users.findBy({ user })
    .first()
    .then(user => {  
      if (user && crypt.compareSync(password,user.password)) {
        res.status(200).json({ message: `Welcome ${user.user}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
function restricted(req,res,next){
const {user,password}=req.headers;
if (user && password){
  Users.findBy({user}).first().then(user=>{
   if( user && crypt.compareSync(password,user.password)){
     next();
   }else{
    res.status(401).json({ message: 'Invalid Credentials' });
   }
  }).catch(err=>res.status(500).json({message:'unexpected error'}))
}else{
  res.status(401).json({ message: 'Invalid Credentials' });
}
}
router.get('/', restricted, (req, res) => {
  Users.find()
    
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});


// const hash = bcrypt.hashSync( , );
//override

module.exports = router;