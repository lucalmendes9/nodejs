const fs = require("fs");

console.log("importado com sucesso.");

// let texto = fs.readFileSync("teste.txt");

fs.readFile("teste.txt", function callbackLeitura(erro, sucesso) {
    if (erro) {
        console.log("Ocorreu um erro. O erro foi:");
        console.log(erro);
    } else {
        console.log(sucesso.toString());
        console.log("o texto esta na tela");
    }
});

console.log("funcao de leitura executada");

let paraEscrever = process.argv[2];

fs.writeFile('escrever.txt', `${paraEscrever}\r\n`, (erro, sucesso) => {
// fs.appendFile('escrever.txt', paraEscrever, (erro, sucesso) => {

    if(erro){
        console.log("Erro ao escrever o arquivo.")
        console.log(erro);
    }
    else{
        console.log("Arquivo escrito com sucesso.")
    }
});