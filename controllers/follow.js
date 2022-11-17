const User = require("../models/User");

module.exports = {
  addFollow: async (req, res) => {
    try {
        await User.findOneAndUpdate({
            _id: req.params.id 
          },
          {
            $push: {following: req.params.postMaker}
          });
          res.redirect(`/post/${req.params.postid}`);
    } catch (err) {
      console.log(err);
    }
  }
}