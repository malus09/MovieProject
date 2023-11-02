import Movie from "../domain/movies";

class MovieDao {
  listaFilmes: Movie[] = [
    new Movie(
      "Pânico",
      "Após uma série de mortes misteriosas um grupo de amigos são ameaçados por um assassino. Em uma mistura de emoções fortes e muitos sustos, aqui a única coisa que se pode ter certeza é que todos são vitimas e todos são suspeitos.",
      "1h40min",
      "Terror",
      "14+",
      "https://m.media-amazon.com/images/I/811SBSeF3tL._AC_UF1000,1000_QL80_.jpg"
    ),
    new Movie(
      "Parasita (2019)",
      "Um filme sul-coreano que gira em torno da história de uma família pobre que tenta se infiltrar em uma família rica, com consequências inesperadas.",
      "2h 2min",
      "Drama/Thriller",
      "16+",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJmbajoepvv5M8KO0eev1s80qkpthWlbLvWR1L0BsMat307ypG"
    ),
    new Movie(
      "Coringa (2019)",
      " Uma história de origem do icônico vilão Coringa, interpretado por Joaquin Phoenix, que ganhou o Oscar de Melhor Ator.",
      "2h02min",
      "Suspense psicológico",
      "18+",
      "https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg"
    ),
    new Movie(
      "O Poderoso Chefão (1972)",
      "Um clássico do cinema dirigido por Francis Ford Coppola, que conta a história da família Corleone e sua influência no submundo do crime.",
      "2h55min",
      "Policial/Drama",
      "14+",
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    ),
  ];

  findAll(): Promise<Movie[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.listaFilmes);
      }, 2000); // Simula um atraso de 2 segundos.
    });
  }
}

// Exemplo de uso:
const meuMovieDao = new MovieDao();
meuMovieDao.findAll().then((filmes) => {
  console.log(filmes);
});

export default MovieDao;