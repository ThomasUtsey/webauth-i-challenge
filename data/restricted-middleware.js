const crypt = require("bcryptjs");

const users = require ("./users_model.js");
module.exports=(req,res,next) => {
  
  const {user,password}=req.headers;

   req.session && req.session.user?next():res.status(401).json({message:'You Shall Not Pass.'});

  }
  