import getPosts from "../models/postModels.js";

const controllerGetPost = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
};

const controllerGetPostById = async (req, res) => {
  const post = await getPostsById(req.params.id);
  res.status(200).json(post);
};

export default controllerGetPost;
