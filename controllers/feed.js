exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first Post" }],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  res.status(201).json({
    message: "Post created",
    post: {
      id: new Date().toISOString,
      title: title,
      content: content,
    },
  });
};
