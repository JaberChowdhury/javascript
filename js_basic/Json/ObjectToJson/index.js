const data = [];
const generateName = () => {
  const x =
    "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat";
  const xArray = x.split(" ");
  let xLen = xArray.length;
  return `${xArray[Math.floor(Math.random() * xLen)]} ${
    xArray[Math.floor(Math.random() * xLen)]
  }`;
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

for (let i = 0; i < 150; i++) {
  data.push({
    id: i,
    uuid: crypto.randomUUID(),
    name: generateName(),
    age: Math.floor(Math.random() * 85),
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
    mainSubject: ["Mathmathics", "Biology"][Math.floor(Math.random() * 2)],
  });
}

console.log(JSON.stringify({ data }));
