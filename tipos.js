/*
Tipos primitivos
*/
let name = "Pablo"; // String
let date = 24; //number
let ehAluno = false; //boolean
let ehProfessor = true; //boolean
let aulaDoDiaPrimeiro = undefined; // undefined
let aulaDoDiaDois; //undefined
let salaDeAula = null; //null

/*
    Conjunto de dados, lista de (Araay)
    estrutura guia por indice, cada valor receber uma chave numerica unica
*/

let alunos = [
    "Pablo",
    "Leticia",
    "Mari"
];

/*

    objects (Similar um (ARRAY) mas consigo definir um nome para (INDICE))

    //let turma34 = [20, "19:30", "21:30", "Seg - Qui"];

*/
let turma34 = {
    quantidadeDeAluno: 34,
    inicioDaAula: "19:30",
    fimDaAula: "21:30",
    diaDasSemana: "Seg - Qui"


};

/*
Misturando array e objetos
*/

let turmas = {
    fs34 : {
        quantidadeDeAluno : 34,
        diaDasSemana: "Sab"
    },
    fsl20 : {
        quantidadeDeAluno : 20,
        diaDasSemana : "Seg - Qui"
    }
};

let minhasTurmas = [
    {
        codigo : "fs34",
        quantidadeDeAluno : 34,
        diaDasSemana : "Sab"

    },
    {
        codigo : "fsl20",
        quantidadeDeAluno : 20,
        diaDasSemana : "Seg - Qui"
    }

];

let turma02 = {
    quantidadeDeAluno : 20,
    horaInicio : "19:30",
    horaFim : "21:30",
    diaDasSemana: ["Seg", "Ter", "Qua", "Qui"] 
}

let data = '27/03/2024';
let local = "Digital College Aldeota";

let evento = { data, local };

evento.title = "Aprendendo JS";

let nomeDoMeuAtributo = 'title';

console.log(evento[nomeDoMeuAtributo]);

