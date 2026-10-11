import express from "express";
import "dotenv/config";
import getPostRoutes from "./src/routes/postRoutes.js";

const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Servidor escutando... na porta: http://localhost:3000");
});
getPostRoutes();

function buscarPorId(id) {
  let post;
  posts.forEach((p) => {
    if (p.id === Number(id)) {
      post = p;
    }
  });
  return post;
}

app.get("/api", (req, res) => {
  res.status(200).send("uma resposta a uma requisição HTTP GET");
});

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = buscarPorId(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "post não encontrado" });
  }
  return res.status(200).json(post);
});
