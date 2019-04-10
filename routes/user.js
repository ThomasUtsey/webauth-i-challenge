const express = require('express');
const router = express.Router();
// const knex = require('knex');

// const knexConfig = {
//   client:'sqlite3',
//   useNullAsDefault: true,
//   connection:{
//     filename:'./data/lambda.sqlite3'
//   }
// }



router.get('/', async (req, res) => {
  res.send(`
    <h2>Lambda Project API</h2>
    <p>Welcome to the Lambda Project API</p>
    `);
});

module.exports = router;