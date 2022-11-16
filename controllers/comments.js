const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
    
      await Comment.create({
        comment: req.body.comment,
        createdBy: req.user.userName,
        createdById: req.user.id,
        likes: 0,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
   
      await Comment.deleteOne({ _id: req.params.deleteid });
      console.log("Deleted Post");
      console.log(req.params.postid)
      res.redirect("/post/"+req.params.postid);
    } catch (err) {
      res.redirect("/post/"+req.params.postid);
    }
  },
};