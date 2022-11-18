const User = require("../models/User");
const Post = require("../models/Post");

module.exports = {
  addFollow: async (req, res) => {
    try {
      await User.findOneAndUpdate({
        _id: req.params.id
      },
        {
          $push: { following: req.params.postMaker }
        });
      console.log(`following ${req.params.postMaker}!`)
      res.redirect(`/post/${req.params.postid}`);
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const curUser = await User.findOne({
        _id: req.user.id
      })
      const posts = await Post.find({
        createdBy: { $in: curUser.following }
      }).sort({ createdAt: "desc" }).lean();
      res.render("followFeed", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err)
    }
  },
  deleteFollowed: async (req, res) => {
    try {
      const updatedUser = await User.findOneAndUpdate({
        _id: req.user.id
      },
        {
          $pull: { following: req.params.followed }
        },
        { new: true }
      );
      console.log(`UPDATED: ${updatedUser}`)
      const posts = await Post.find({ user: req.user.id });
      res.render("profile", { posts: posts, user: updatedUser });
    } catch (err) {
      console.log(err)
    }
  },
}