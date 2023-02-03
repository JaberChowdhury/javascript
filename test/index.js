/*
const getData = async () => {
  const data = await fetch("http://localhost:3000");
  const jsondata = await data.json();
  const final = jsondata.messages;

  final.map((value, index = 3) => {
    try {
      const { id, type, content } = final[index][0]; //Done
      const { username, avatar, avatar_decoration, public_flags, bot } =
        final[index][0].author; //Done
      const { size, url, proxy_url, width, height, content_type } =
        final[index][0].attachments[0]; //Done
    } catch (error) {
      console.log(error.name);
      console.log(index);
    }
  });
};

getData();
*/