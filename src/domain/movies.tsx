class Movie {
  public titulo: string;
  public sinopse: string;
  public tempo: string;
  public genero: string;
  public idadeIndicativa: string;
  public imagem: string;

  constructor(
    titulo: string,
    sinopse: string,
    tempo: string,
    genero: string,
    idadeIndicativa: string,
    imagem: string
  ) {
    this.titulo = titulo;
    this.sinopse = sinopse;
    this.tempo = tempo;
    this.genero = genero
;
    this.idadeIndicativa = idadeIndicativa;
    this.imagem = imagem;
  }
}

// Exemplo de uso:
const meuFilme = new Movie(
  "Meu Filme",
  "Uma breve sinopse do filme.",
  "2 horas",
  "PG-13",
  "12+",
  "caminho/para/a/imagem.jpg"
);

export default Movie;