const data = [];

const generateName = () => {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  const first =
    alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
  const second =
    alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();

  let one = "";
  let two = "";
  for (let i = 0; i < 5; i++) {
    one += alphabet[Math.floor(Math.random() * alphabet.length)];
    two += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `${first}${one} ${second}${two}`;
};

const generateEmojis = () => {
  const x = [
    ..."😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😶‍🌫️😏😒🙄😬😮‍💨🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳🥸😎🤓🧐😕😟🙁☹️😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️👻👽😺😸😹😻😼😽🙀😿😾💌💘💝💖💗💓💞💕💛🧡❤❤️‍🩹❤️‍🔥💔❣️💟💚💙💜🤎🖤🤍",
  ];
  let xLen = x.length;
  let final = "";
  for (let i = 0; i < 10; i++) {
    final += x[Math.floor(Math.random() * xLen)];
  }
  return final;
};
const generateFruits = () => {
  const x = [
    ..."🍇🍈🍉🍊🍋🍌🍍🥭🥝🫐🍓🍒🍑🍐🍏🍎🍅🫒🥥🥑🍆🥔🥕🌽🌶🫑🥒🥬🥦🧄🧅🍄🧆🍡🍠🍢🧉",
  ];
  let xLen = x.length;
  let final = "";
  for (let i = 0; i < 10; i++) {
    final += x[Math.floor(Math.random() * xLen)];
  }
  return final;
};
const generateAnimals = () => {
  const x = [
    ..."🐵🐒🦍🦧🐶🐕🦮🐕‍🦺🐩🐺🦊🦝🐱🐈🐈‍⬛🦁🐯🐅🐆🐴🐎🦄🦓🦌🦬🐮🐂🐃🐄🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿🦫🦔🦇🐻🐨🐻‍❄️🐼🦥🦦🦨🦘🦡🐾🦃🐔🐓🐣🐤🐥🐦🐧🕊🦅🦆🦢🦉🦤🪶🦩🦚🦜🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦭🐟🐠🐡🦈🐙🦀🦞🦐🦑🐚🐌🦋🐛🐜🐝🪲🐞🪱🪰🦟🦂🪳🕷🦗",
  ];
  let xLen = x.length;
  let final = "";
  for (let i = 0; i < 10; i++) {
    final += x[Math.floor(Math.random() * xLen)];
  }
  return final;
};
const generateGames = () => {
  const x = [
    ..."⚽️⚾️🥎🏀🏐🏈🏉🎾🥏🎳🏏🏑🏒🥍🏓🏸🥊🥋🥅⛳️⛸️🪀🎯🥌🛷🎿🎽🤿🎣🪁🎱🔮🪄🧿🎮🕹🎰🎲🧩🧸🪅🧶🧵🎭",
  ];
  let xLen = x.length;
  let final = "";
  for (let i = 0; i < 10; i++) {
    final += x[Math.floor(Math.random() * xLen)];
  }
  return final;
};

for (let i = 0; i < 400; i++) {
  data.push({
    id: i,
    uuid: crypto.randomUUID(),
    name: generateName(),
    age: Math.floor(Math.random() * 85),
    totalWife: Math.floor(Math.random() * 4) + "😑",
    favouriteFruits: generateFruits(),
    favouriteEmojis: generateEmojis(),
    favouriteAnimals: generateAnimals(),
    favouriteGames: generateGames(),
    result: {
      firstPaper: {
        Bangla: Math.floor(Math.random() * 100),
        English: Math.floor(Math.random() * 100),
        Mathmathics: Math.floor(Math.random() * 100),
        Physics: Math.floor(Math.random() * 100),
        Chemistry: Math.floor(Math.random() * 100),
        Biology: Math.floor(Math.random() * 100),
        ICT: Math.floor(Math.random() * 100),
        SocialScience: Math.floor(Math.random() * 100),
      },
      secondPaper: {
        Bangla: Math.floor(Math.random() * 100),
        English: Math.floor(Math.random() * 100),
        Mathmathics: Math.floor(Math.random() * 100),
        Physics: Math.floor(Math.random() * 100),
        Chemistry: Math.floor(Math.random() * 100),
        Biology: Math.floor(Math.random() * 100),
        ICT: Math.floor(Math.random() * 100),
        SocialScience: Math.floor(Math.random() * 100),
      },
    },
    creative: {
      game: {
        indoor: ["Carrom", "Chess", "Ludu", "Table-tenis"][
          Math.floor(Math.random() * 4)
        ],
        outdoor: ["Race", "Cricket", "Football", "Basketball"][
          Math.floor(Math.random() * 4)
        ],
      },
      travelling: {
        beach: {
          national: ["Cox's Bazar", "Potenga"][Math.floor(Math.random() * 2)],
          international: ["Howie!!", "Thailand", "Maldives"][
            Math.floor(Math.random() * 3)
          ],
        },
        hills: {
          national: ["chittagong", "Bandorbann"][Math.floor(Math.random() * 2)],
          international: ["Amazon", "Alaska", "Everest"][
            Math.floor(Math.random() * 3)
          ],
        },
      },
    },
    mainSubject: ["Mathmathics", "Biology"][Math.floor(Math.random() * 2)],
  });
}

console.log(JSON.stringify({ data }));
// console.log(data)
