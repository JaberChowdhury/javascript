let i = 0;
let data = "";
const getData = async () => {
  i++;
  const req = await fetch(`https://danbooru.donmai.us/posts/+${i}+.json`);
  const json = await req.json();
  const {
    id,
    created_at,
    score,
    image_width,
    image_height,
    tag_string,
    fav_count,
    file_ext,
    file_size,
    tag_string_character,
    tag_string_copyright,
    tag_string_artist,
    tag_string_meta,
    file_url,
    large_file_url,
    preview_file_url,
  } = await json;
  // data += await "ejjejej";
  console.log(json.id);
  console.log("value of i === " + i);
  if (id === 10) {
    clearInterval(work);
  }
};

const work = setInterval(() => {
  getData();
}, 1000);
