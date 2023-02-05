const fetchData = async (i) => {
  try {
    const req = await fetch(`https://danbooru.donmai.us/posts/${i}.json`);
    return await req.json();
  } catch (e) {
    console.log(e);
  }
};

const data = async () => {
  let data = "";
  for (var i = 0; i < 100; i++) {
    const json = await fetchData(i + 1);
    if (!json) {
      continue;
    }
    let id = json.id || 0,
      created_at = json.created_at || "N/A",
      score = json.score || 0,
      image_width = json.image_width || 0,
      image_height = json.image_height || 0,
      tag_string = json.tag_string || "N/A",
      fav_count = json.fav_count || 0,
      file_ext = json.file_ext || "N/A",
      file_size = json.file_size || 0,
      tag_string_character = json.tag_string_character || "N/A",
      tag_string_copyright = json.tag_string_copyright || "N/A",
      tag_string_artist = json.tag_string_artist || "N/A",
      tag_string_meta = json.tag_string_meta || "N/A",
      file_url = json.file_url || "N/A",
      large_file_url = json.large_file_url || "N/A",
      preview_file_url = json.preview_file_url || "N/A";

    console.log(tag_string_artist);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

data();
