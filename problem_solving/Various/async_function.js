const sleep = () => {
   return new Promise(resolve=>setTimeout(resolve, ms));
};
async function tutor (){
   for (let i = 0; i <= 20; i++) {
      await sleep(1000);
      console.log("--------"+i);
   }
}
tutor();