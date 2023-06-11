const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i = 0; i < usuarios.length; i++) {
    const pessoa = usuarios[i];
    const numPets = pessoa.pets.length;

    if (numPets === 0) {
        console.log(`Sou ${pessoa.nome} e não tenho pets.`);
    } else if (numPets > 1) {
        console.log(`Sou ${pessoa.nome} e tenho ${numPets} pets.`);
    } else {
        console.log(`Sou ${pessoa.nome} e tenho 1 pet.`);
    }
}