const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// let players1 = game.players[0];
// let players2 = game.players[1];
const [players1, players2] = game.players;

// 2.
let [gk, ...fieldPlayers] = players1;

// 3.
let allPlayers = [...players1, ...players2];

// 4.
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// // 5.
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
};

let x = game.scored;
printGoals(...x);
printGoals("Davies", "Muller", "Lweandowski", "Kimmich");
printGoals("Davies", "Muller");

// 7.

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");
