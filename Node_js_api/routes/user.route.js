const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();


router.route('/travel/list')
    .get(userController.listTravelInfo);
router.route('/travel/create')
    .post(userController.addTravelInfo);
module.exports = router;
