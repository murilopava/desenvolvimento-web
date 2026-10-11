import conectarAoBanco from "./src/config/dbConfig.js";

const connect = await conectarAoBanco(process.env.CONNECTION_STRING);

async function getPosts() {
  const db = connect.db("instavale");
  const colecao = db.collection("posts");

  return colecao.find().toArray();
}

export default getPosts;
