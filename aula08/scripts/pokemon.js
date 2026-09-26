const listarPokemons = function () {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=50";

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      data.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())

          .then((dados) => {
            let nome = dados.name;
            let id = dados.id;
            let imagem = dados.sprites.front_default;

            let resultado = `                        
                        <div class="col-md-3 mb-4">
                            <div class="card text-center shadow">
                                <div class="card-body">
                                    <img 
                                        src="${imagem}" 
                                        class="img-fluid"
                                    >

                                    <h5 class="card-title">
                                        ${nome}
                                    </h5>

                                    <p class="card-text">
                                        ID: ${id}
                                    </p>
                                </div>
                            </div>
                        </div>              
                        `;
            document.getElementById("resultado").innerHTML += resultado;
          })
          .catch((error) => alert(error));
      });
    })

    .catch((error) => alert(error));
};

listarPokemons();
