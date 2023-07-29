const express = require('express');
const controller = require('../../controllers/binary.controller');
const router = express.Router();

router
  .route('/encode')
  .post(controller.encode);

router
.route('/decode')
.post(controller.decode);

router
  .route('/store-image')
  .post(controller.storeImage);

module.exports = router;