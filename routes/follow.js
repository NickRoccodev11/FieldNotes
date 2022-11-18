const express = require("express");
const router = express.Router();
const followController = require("../controllers/follow");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Follow routes
router.put("/followPoster/:postid/:id/:postMaker", followController.addFollow);

router.get("/followFeed", followController.getFeed);

router.delete("/deleteFollow/:followed", followController.deleteFollowed);



module.exports = router;