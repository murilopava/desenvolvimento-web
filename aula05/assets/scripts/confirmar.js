let dados = sessionStorage.getItem("denuncia");

let denuncia = JSON.parse(dados);

let texto = "";

texto +=
  "<p><strong>Tipo de denúncia:</strong> " + denuncia.tipoDenuncia + "</p>";

if (denuncia.tipoDenuncia == "Problema Urbano") {
  texto += "<p><strong>Rua:</strong> " + denuncia.rua + "</p>";

  texto += "<p><strong>Cidade:</strong> " + denuncia.cidade + "</p>";

  texto += "<p><strong>Problema:</strong> " + denuncia.tipo + "</p>";

  texto += "<p><strong>Descrição:</strong> " + denuncia.descricao + "</p>";
}

if (denuncia.tipoDenuncia == "Maus-Tratos a Animais") {
  texto += "<p><strong>Animal:</strong> " + denuncia.animal + "</p>";

  texto += "<p><strong>Quantidade:</strong> " + denuncia.quantidade + "</p>";

  texto += "<p><strong>Local:</strong> " + denuncia.local + "</p>";

  texto += "<p><strong>Descrição:</strong> " + denuncia.descricao + "</p>";
}

document.getElementById("dados").innerHTML = texto;

function enviarDenuncia() {
  alert("Denúncia enviada com sucesso!");

  sessionStorage.clear();

  window.location.href = "./home.html";
}
