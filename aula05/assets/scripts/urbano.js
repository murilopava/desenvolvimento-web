function salvarUrbano() {
  let denuncia = {
    tipoDenuncia: "Problema Urbano",

    rua: document.getElementById("rua").value,

    cidade: document.getElementById("cidade").value,

    tipo: document.getElementById("tipo").value,

    descricao: document.getElementById("descricao").value,
  };

  sessionStorage.setItem("denuncia", JSON.stringify(denuncia));
}
