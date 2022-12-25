// default parameter

const message = (msg = "Hii!! there.") => {
    console.log(`${msg}`);
};
message();
message("Hii!! i have sent a message");

// so what we have done here ??
/*
suppose we need a message from use but our user left that input box empty
and sent that empty message so we add a default value of our user message
*/


// rest parameter 

const getNumber = (x, y, ...z) => {
    console.log(`${x}, ${y}, this is z value= ${z}`);
    console.log(typeof(z)); // object
};
getNumber(16, 57, 57, 67, 7, 6, 6, 66, 6, 79);