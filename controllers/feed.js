const { validationResult } = require("express-validator");

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
  res.status(201).json({
    message: "Post created",
    post: {
      _id: new Date().toISOString,
      creator: {
        name: "Sagar",
      },
      createdAt: new Date(),
      title: title,
      content: content,
    },
  });
};
