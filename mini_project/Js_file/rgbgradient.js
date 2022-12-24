const rgba =()=>{
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    var alpha = Math.random()*1.01;//extra +1 is for maximum transparency 
    var rgbcolor = `rgba(${red},${green},${blue},${alpha})`;
    return rgbcolor;
};

const gradient =(limit)=> {
    var x = Math.floor(Math.random()*360);
    const c = `${rgba()},`;
    const countrgb = c.repeat(limit);
    const rgbcolor = `-webkit-linear-gradient(${x}deg,${countrgb}${rgba()})`;
    console.log (rgbcolor)
    return rgbcolor;
};

gradient(2);