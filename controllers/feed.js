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
    const error = new Error("Validation Failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
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
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
