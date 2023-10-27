// Função para buscar filmes
function buscarFilmes() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=adfdebbadeb49534456300ba57b4502f&sort_by=popularity.desc&language=pt-BR`;

  //AJAX para fazer a chamada à API
  $.ajax({
    url: url,
    method: "GET",
    success: function (resposta) {
      const filmes = resposta.results;
      let html = "";

      // Loop para criar HTML para cada filme
      for (const filme of filmes) {
        const titulo = filme.title;
        const urlImagem = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
        html += `<div>
            <h2>${titulo}</=h2>
                <img src="${urlImagem}" alt="${titulo}" />
        </div>`;
      }

      // enviar filmes para a div
      $("#lista-de-filmes").html(html);
    },
  });
}

//função ao carregar a página
$(document).ready(function () {
  buscarFilmes();
});
