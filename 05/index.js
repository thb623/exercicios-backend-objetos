const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const aulas = [
    {
        identificador: "01",
        nome: "Introdução a programação",
    },
    {
        identificador: "02",
        nome: "Variáveis",
    },
    {
        identificador: "03",
        nome: "Condicionais",
    },
    {
        identificador: "04",
        nome: "Arrays",
    },
];

for(let i = 0; i < aulas.length; i++){
    curso.aulas.push(aulas[i])
}

console.log(curso)