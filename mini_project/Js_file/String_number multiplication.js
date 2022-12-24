
function myfunctionforrepeatstr () {
	const str = "●" ;
	for (x=-22; x<22; x++) {
   	const str_value = str.repeat(Math.abs(x));
  	console.log (str_value);
	}
}
// Calling the function 
myfunctionforrepeatstr();


function first_function () {
  const stri = "🔥" ;
  for (x=0; x<20; x++) {
    const stri_x = stri.repeat(Math.abs(x));
    console.log(stri_x);
  }
}

function second_function () {
  const stri = "🔥";
  for (x=-20; x<0; x++) {
    const stri_x = stri.repeat(Math.abs(x));
    console.log (stri_x);
  }
}
function total_function () {
  first_function();
  second_function();
}
total_function();