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
// console.log(game);

// 6.
// printGoals = (...players) => {
//   console.log(`${players.length} goals were scored`);
// };

/////////////////////////////////////////////////
// Challenge #2

let scoredArray = game.scored;
let entries = scoredArray.entries();
// console.log(keys[3]);
// d

/////////////////////////
// Challenge #2
// 1. c
for (const [x, player] of entries) {
  console.log(`Goal:${x + 1}: ${player}`);
}
// 2. c
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of Object.values(game.odds)) avg += odd;
avg /= odds.length;
console.log(avg);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// let scorers = {

// }

// 4.

// printGoals(...x);
// printGoals("Davies", "Muller", "Lweandowski", "Kimmich");
// printGoals("Davies", "Muller");

// 7.

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 1 is more likely to win");
