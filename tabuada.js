let base = process.argv[2];

if(process.argv.length === 3 && !isNaN(number(process.argv[2])) ){
    for (let i = 1; i <= 10; i++) {
        console.log(`${base}x${i} = ${i * base}`);
    }
}
else {
    console.log("Utilizacao");
    console.log("node <arquivo> <numero>");
}

