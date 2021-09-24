var ListaDePecas = ["ab", "peça 2", "peça 3", "peça 4", "peça 5", "peça 6", "peça 7", "peça 8", "peça 9", "peça 10", "peça 11"];
console.log("quantidade de peças");

if (ListaDePecas.length > 10){
    console.log("capacidade insuficiente");
} else{
    console.log("capacidade suficiente");
}

console.log("Quantidade de caracteres");

for (contador = 0; contador < ListaDePecas.length;contador++){
    var PecaAtual = ListaDePecas [contador];

    if(PecaAtual.length< 3 ){
        console.log(PecaAtual + ": peça possui nome inferior a 3 caracteres nao pode ser cadastrada");
} else {console.log (PecaAtual + ": a peça pode ser cadastrada!")}
}



console.log("peso da peça");
var PesoDaPeçaEmgramas = 50;
if (PesoDaPeçaEmgramas >= 100){
    console.log ("peso suficiente")
}
else{console.log ("peso insuficiente")}
