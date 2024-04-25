/**
*
* 🫒 Title : text search
* 🫒 Description : search item from given array 
* 🫒 Author : Md Jaber Hossain Chowdhury
* 🫒 Date : 24 April 2024
*
**/

const vowel = "aeiouAEIOU".split("");
const special = `-'":;,?!@#£%^&*()+×÷=/_<>[]~\|{}€$¥₩°•○●□■♤♡◇♧☆▪︎¤《》¡¿`.split("");



const search_vowel = (text) => {
  const data = text ? text.split("") : [];
  let vowels = [];
  
  for(let i=0; i<data.length; i++){
    for(let k=0; k<vowel.length; k++){
      if(data[i] === vowel[k]){
        vowels.push(data[i])
      }
    }
  }
  return vowels;
};
const search_special = (text) => {
  const data = text ? text.split("") : [];
  let specials = [];
  
  for(let i=0; i<data.length; i++){
    for(let k=0; k<special.length; k++){
      if(data[i] === special[k]){
        specials.push(data[i])
      }
    }
  }
  return specials;
};

const search_space = (text) => {
  const data = text ? text.split("") : [];
  let space_count = []
  for(let i=0; i<data.length; i++){
    if(data[i] === " " || data[i] === "  "){
      space_count.push(data[i])
    }
  }
  return space_count
}

const search_operation = (text) => {
  const vowels_result = search_vowel(text)
  const specials_result = search_special(text)
  const space_result = search_space(text)
  
  console.log({
    vowels_result,
    specials_result,
    space_result
  })
};


search_operation("ghp_0dLO^rWM9ahdudbiwbdjwjjdiwQ&,VOu@onD2C+a3zDB?Ld0EJ>e7A");