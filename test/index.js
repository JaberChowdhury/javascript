const getData = async () => {
  const req = await fetch("https://danbooru.donmai.us/posts/" +Math.floor(Math.random() * 60000) +".json"
  );
  const json = await req.json();
  const text = await json.tag_string;
  const id = await json.id;
  const tag_string = await json.tag_string;

  let splitedText = tag_string.split(" ");
  const badWords = [
    "breasts",
    "nude",
    "ass",
    "pussy",
    "uncensored",
    "spread_pussy",
    "nipples",
    "lingerie",
    "large_breasts",
    "no_panties",
    "underwear",
    "bra",
    "bdsm",
    "public_bondage",
    "public_nudity",
    "gym_uniform",
    "bikini",
  ];





  const findbadword = () => {
    for (let i = 0; i < splitedText.length; i++) {
      if (badWords.includes(splitedText[i])) {
        console.log("The user text contains inappropriate language.");
        console.log(splitedText[i]);
         break;
      }
      if (i === splitedText.length) {
        console.log("The user text is appropriate.");
      }
    }
  };
};

