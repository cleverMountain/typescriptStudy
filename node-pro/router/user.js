
const express = require("express");
const router = express.Router();
const { login } = require('../router_handler/user.js')

const userRouter = router.post("/login", login);

module.exports = userRouter