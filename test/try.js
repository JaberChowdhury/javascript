const fetchData = async (i) => {
  const req = await fetch(`https://danbooru.donmai.us/posts/${i}.json`);
  return await req.json();
};

const getData = async () => {
  let data = "";
  for (let i = 0; i < 1000; i++) {
    const json = await fetchData(i + 1);
    let id = 0,
      created_at = "N/A",
      score = 0,
      image_width = 0,
      image_height = 0,
      tag_string = "N/A",
      fav_count = 0,
      file_ext = "N/A",
      file_size = 0,
      tag_string_character = "N/A",
      tag_string_copyright = "N/A",
      tag_string_artist = "N/A",
      tag_string_meta = "N/A",
      file_url = "N/A",
      large_file_url = "N/A",
      preview_file_url = "N/A";
    try {
      id = json.id;
      created_at = json.created_at;
      score = json.score;
      image_width = json.image_width;
      image_height = json.image_height;
      tag_string = json.tag_string;
      fav_count = json.fav_count;
      file_ext = json.file_ext;
      file_size = json.file_size;
      tag_string_character = json.tag_string_character;
      tag_string_copyright = json.tag_string_copyright;
      tag_string_artist = json.tag_string_artist;
      tag_string_meta = json.tag_string_meta;
      file_url = json.file_url;
      large_file_url = json.large_file_url;
      preview_file_url = json.preview_file_url;
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  }
};

getData();
