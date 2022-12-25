// febonacci 


var febo = [0, 1];

for (let i = 2; i < 1000; i++) {
    febo[i] = febo[i - 2] + febo[i - 1];
}

console.table(febo);