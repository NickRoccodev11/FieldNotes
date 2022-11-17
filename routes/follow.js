const express = require("express");
const router = express.Router();
const followController = require("../controllers/follow");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.put("/followPoster/:postid/:id/:postMaker", followController.addFollow);



module.exports = router;