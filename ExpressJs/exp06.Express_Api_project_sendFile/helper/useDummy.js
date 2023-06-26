const data = {};

const makeName = () => {
  const textArray =
    "fukaya miku genshin impact ganyu genshin impact highres md5 mismatch resolution mismatch source smaller 1girl ahoge bangs bare shoulders bell black gloves blue hair blush breasts brushing hair cloud retainer damasked device genshin impact comb detached sleeves gloves holding holding comb horns indoors long hair looking at viewer medium breasts neck bell purple eyes sidelocks smile sparkle upper body white sleeves window anime movie screencap 1girl and 1girl stand far apart from each otherfacing each other face to face looking into each other's eyes angry expressions both are holding swords shanashagukan no shanamasterpiece best quality extremely detailed super fine illustration 1 girldark red long hairGradient eyesblurry flower falling from sky beside a road open grass field pink flower falling from sky little clouds on skylong clear skywarmth colour gradingflower falling from sky8kdetailedjpeg artifacts blurry errordisgusting worst quality bad anatomy bad quality inaccurate limbs   missing limbs   extra limbs   mutated limbs   lowers    mutated hands mutated fingers  uglycloned facedisfiguredmorbidowers bad anatomy text error extra digit fewer digits worst quality low quality normal quality jpeg artifacts signature watermark username blurry 11 missing arms feather dragonbad eyes disfigured eyes mutated hands and fingers 15 one hand with more than 5 fingers one hand with less than 5 fingers missing fingers one foot with more than 5 fingers one foot with less than 5 fingers hand deformitiebad mouthbad teethrealistic mouthhuge breastnsfw in hand pointing swords at each othe".split(
      " "
    );
  const random = () => Math.floor(Math.random() * textArray.length);
  data.name = `${textArray[random()]} ${textArray[random()]}`;
};
const makeAge = () => {
  data.age = Math.floor(Math.random() * 120);
};
const makeGender = () => {
  const gender = ["Male", "Female"];
  const r = () => Math.floor(Math.random() * gender.length);
  return gender[r()];
};
const makeBirthDay = () => {
  data.birthDay = new Date().getFullYear() - data.age;
};

const makeLocation = () => {
  const loc = ["Dhaka", "Cumilla", "Chittagong", "Rangpur"];
  return loc[Math.floor(Math.random() * loc.length)];
};
const makePrimary = () => {
  if (data.age >= 16) {
    return {
      name: "PSC",
      passedYear: data.birthDay + 16,
      location: makeLocation(),
    };
  } else {
    return null;
  }
};
const makeSecondary = () => {
  if (data.age >= 18) {
    return {
      name: "SSC",
      passedYear: data.birthDay + 18,
      location: makeLocation(),
    };
  } else {
    return null;
  }
};
const makeHigher = () => {
  if (data.age >= 25) {
    return {
      name: "University/Medical",
      passedYear: data.birthDay + 25,
      location: makeLocation(),
    };
  } else {
    return null;
  }
};
const makeFood = () => {
  const food = [
    ..."🥜🌰🍞🥐🥖🫓🥨🥯🍔🥓🥩🍗🍖🧀🥞🍟🍕🌭🥪🌮🌯🫔🥙🥗🥣🫕🍲🥘🍳🥚🧆🍿🧈🧂🥫🍱🍘🍙🍚🍤🦪🍣🍢🍠🍝🍜🍛🍥🥮🍡🥟🥠🥡🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🫖☕️🥛🍼🍯🍮🍭🍬🍵🍶🍾🍷🍸🍹🍺🍻🥂🥃🥤🧋🧃🧉",
  ];
  if (data.age > 10) {
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += food[Math.floor(Math.random() * food.length)];
    }
    return x;
  } else {
    return null;
  }
};
const makeSports = () => {
  const sports = [
    ..."⚽️⚾️🥎🏀🏐🏈🏉🎾🥏🎳🏏🏑🏒🥍🏓🏸🥊🥋🥅⛳️⛸️🪀🎯🥌🛷🎿🎽🤿🎣🪁🔮🔮🪄🧿🎮🕹🎰🎲🧩🧸🪅🪆",
  ];
  if (data.age > 10) {
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += sports[Math.floor(Math.random() * sports.length)];
    }
    return x;
  } else {
    return null;
  }
};
const makeHobby = () => {
  const sports = [
    ..."⚽️⚾️🥎🏀🏐🏈🏉🎾🥏🎳🏏🏑🏒🥍🏓🏸🥊🥋🥅⛳️⛸️🪀🎯🥌🛷🎿🎽🤿🎣🪁🔮🔮🪄🧿🎮🕹🎰🎲🧩🧸🪅🪆",
  ];
  if (data.age > 10) {
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += sports[Math.floor(Math.random() * sports.length)];
    }
    return x;
  } else {
    return null;
  }
};
const makePlace = () => {
  const place = [
    ..."🏔⛰️🌋🗻🏕🏖🏜🏝🏞🏟🏛🏗🏘🏠🏡🏢🏣🏤🏥🏦🏨💒🏰🏯🏭🏬🏫🏪🏩🗼🗽⛪️🕌🛕🕍⛩️⛲️⛺️🌁🏙🌃🌄🌅🎢🎡🎠🌇🌉♨️🎪🚂",
  ];
  if (data.age > 10) {
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += place[Math.floor(Math.random() * place.length)];
    }
    return x;
  } else {
    return null;
  }
};
const makeIsAlive = () => {
  return [true, false][Math.floor(Math.random() * 2)];
};

const useDummy = () => {
  makeName();
  makeAge();
  makeBirthDay();
  const person = {
    uuid: crypto.randomUUID() || "uuid",
    name: data.name || null,
    age: data.age || null,
    gender: data.age > 18 ? makeGender() : ["kid", makeGender()] || null,
    birthDay: data.birthDay || null,
    education: {
      primary: makePrimary() || null,
      secondary: makeSecondary() || null,
      higher: makeHigher() || null,
    },
    favourite: {
      food: makeFood() || null,
      sports: makeSports() || null,
      hobby: makeHobby() || null,
      place: makePlace() || null,
    },
    isAlive: makeIsAlive() || false,
  };
  console.log(person);
  return person;
};

module.exports = useDummy;
