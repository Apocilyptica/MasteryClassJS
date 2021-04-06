const userList = [
  {
    id: 001,
    make: "Ford",
    model: "Fiesta",
    color: "Purple",
  },
  {
    id: 002,
    make: "Subaru",
    model: "Outback",
    color: "Green",
  },
  {
    id: 003,
    make: "Volkswagen",
    model: "Up",
    color: "White",
  },
];

let key = "color";

for (i = 0; i < userList.length; i++) {
  //   console.log(userList[i][key]);
}

userList.push({
  id: 004,
  make: "Chevy",
  model: "Colorado",
  color: "Pink",
});

// console.log(userList);

let netflixShows = [
  {
    title: "Stranger Things",
    rating: 4,
  },
  {
    title: "Cobra Kai",
    rating: 2,
  },
  {
    title: "Queen's Gambit",
    rating: 5,
  },
  {
    title: "Locke & Key",
    rating: 4,
  },
  {
    title: "Big Mouth",
    rating: 3,
  },
  {
    title: "Glee",
    rating: 2,
  },
];

for (let i = 0; i < netflixShows.length; i++) {
  const element = netflixShows[i];
  if (element.rating >= 3) {
    console.log(element.title);
  }
}
