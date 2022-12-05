const jsonServer = require('json-server');
const express = require('express');
const middleware = jsonServer.defaults();
const server = jsonServer.create();
const router = express.Router();

router.route('/:productId');
server.use(middleware);
server.use(jsonServer.bodyParser);

const productData = require('./data/products');

server.get('/api/products', (req, res, next) => {
  let start = parseInt(req.query.page);
  let end = start + 12;
  let result = productData.getProducts.slice(start, end);

  res.status(200).send(result);
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});

module.exports = router;
