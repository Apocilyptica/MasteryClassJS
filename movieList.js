const listOfMovies = [
  {
    account: "Jessy",
    genres: ["Thriller", "Drama", "Anime", "Comedy", "Romance", "Horror", "Documentaries"],
    favourites: [
      {
        title: "Little Miss Sunshine",
        genre: "Comedy",
        year: 2006,
      },
      {
        title: "Howl's Moving Castle",
        genre: "Japanese animation",
        year: 2004,
      },
      {
        title: "Aquaman",
        genre: "Action",
        year: 2019,
      },
      {
        title: "The Shape of Water",
        genre: "Drama",
        year: 2017,
      },
      {
        title: "Your name",
        genre: "Japanese animation",
        year: 2017,
      },
      {
        title: "Inception",
        genre: "Action",
        year: 2010,
      },
    ],
  },
  {
    account: "Daniel",
    genres: ["Thriller", "Drama", "Anime", "Comedy", "Romance", "Horror", "Documentaries"],
    favourites: [
      {
        title: "Aquaman",
        genre: "Action",
        year: 2019,
      },
    ],
  },
];

console.log(`The second movie from Jessy's list is: ${listOfMovies[0].favourites[1].title}`);

let favoriteArray = [];
let notFavoriteArray = [];

for (let i = 0; i < listOfMovies.length; i++) {
  const element = listOfMovies[i];
  if (element.account == "Jessy") {
    let genres = element.genres;
    for (let j = 0; j < element.favourites.length; j++) {
      const favoriteGenre = element.favourites[j].genre;
      if (!favoriteArray.find((e) => e === favoriteGenre)) {
        favoriteArray.push(favoriteGenre);
      }
    }
    for (let j = 0; j < genres.length; j++) {
      const genre = genres[j];
      if (!favoriteArray.find((e) => e === genre)) {
        notFavoriteArray.push(genre);
      }
    }
  }
}

console.log(`${notFavoriteArray} are not in Jessy's favorites.`);
