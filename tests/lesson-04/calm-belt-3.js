// Bai 1
function upgradeCrew() {
  const pirates = [
    { name: "Phuong", bounty: 1000, strength: 500 },
    { name: "Anh", bounty: 700, strength: 400 },
    { name: "Loc", bounty: 300, strength: 200 },
  ];

  const awakenedPirates = pirates.map((char) => {
    return {
      name: char.name.toUpperCase(),
      bounty: char.bounty * 2,
      strength: char.strength * 3,
    };
  });

  const monsterTrioCandidates = awakenedPirates.filter(
    (char) => char.strength > 500,
  );

  console.log("Mang awakenedPrirates:", awakenedPirates);

  console.log("Mang monsterTrioCandidates:", monsterTrioCandidates);
}

upgradeCrew();

// Bai 2
function printLeaderboard(players) {
  players.sort((a, b) => b.score - a.score);

  const medals = ["🥇", "🥈", "🥉"];

  players.forEach((player, index) => {
    let prefix = "";

    if (index < 3) {
      prefix = medals[index] + " ";
    } else {
      prefix = `${index + 1}. `;
    }

    console.log(`${prefix}${player.name}: ${player.score}`);
  });
}

const crewList = [
  { name: "Luigi", score: 850 },
  { name: "Mario", score: 1000 },
  { name: "Peach", score: 1200 },
  { name: "Bowser", score: 950 },
  { name: "Yoshi", score: 700 },
];

printLeaderboard(crewList);
