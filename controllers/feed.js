const { validationResult } = require("express-validator");
const { post } = require("../routes/feed");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "21",
        title: "First Post",
        imageUrl: "images/lens.jpeg",
        content: "This is the first Post",
        creator: {
          name: "Sai",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      message: "Validation Failed, entered data is incorrect.",
      errors: errors.array(),
    });
  }
  const { title, content } = req.body;
  const post = new Post({
    creator: {
      name: "Sagar",
    },
    title: title,
    content: content,
    imageUrl: "images/lens.jpeg",
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created",
        post: result,
      });
    })
    .catch((e) => console.log(e));
};
