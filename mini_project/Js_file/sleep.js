function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function myfu () {
     for (x=0; x<100; x++) {
        await sleep (500);
        console.log("--------"+x);
  }
}
myfu();
