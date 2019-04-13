const express = require('express'); // importing a CommonJS module

const cors = require('cors')

const user = require('./routes/user')

const helmet = require('helmet');

const morgan = require('morgan');

const server = express();

const session = require ('express-session')


function logger(req,res,next){
  console.log(new Date(), req.method,req.url);
  next ();
}


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(logger);




const sessionConfig = {
  name:'monkey',
  secret:'keep it secret',
  cookie: {
    maxAge: 1000*60*60,
    secure:false,
  },
  httpOnly:true,
  resave:false,
  saveUninitialized:false
}

server.use(session(sessionConfig));

server.get('/', async (req, res) => {
  res.send(`
    <h2>Lambda Project API</h2>
    <p>Welcome to the Lambda Project API</p>
    `);
});
server.use('/api/user', user);

module.exports = server;