let idade = 15;
let isNumnber = typeof idade === 'number';
if(isNumnber){
    console.log("Minha variavel idade é do tipo number");
}


if (idade > 18) {
console.log("idade é maior que 18");


}else if (idade === 18) {
    console.log("idade é igual a 18");
} else if (idade >= 16) {
    console.log("idade é menor ou igual a 16");
} else {
    console.log("Idade não maior nem igual a 18");
};