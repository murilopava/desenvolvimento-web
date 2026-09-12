function salvarAnimal() {
  let denuncia = {
    tipoDenuncia: "Maus-Tratos a Animais",

    animal: document.getElementById("animal").value,

    quantidade: document.getElementById("quantidade").value,

    local: document.getElementById("local").value,

    descricao: document.getElementById("descricao").value,
  };

  sessionStorage.setItem("denuncia", JSON.stringify(denuncia));
}
