import controllerGetPost from "../config/controllers/postControllers.js";

const getPostRoutes = (app) => {
  app.get("/posts", controllerGetPost);

  app.get("/posts:id", controllerGetPostById);
};

export default getPostRoutes;
