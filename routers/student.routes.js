let usercontroller = require('../controllers/student.controller')
const express = require('express')
let router = express.Router();

  router.post('/', usercontroller.create);
  router.get('/', usercontroller.readMany);
  router.get('/:_id', usercontroller.readOne);
  router.post('/:_id', usercontroller.update);
  router.get('/delete/:_id', usercontroller.remove);

module.exports = router
