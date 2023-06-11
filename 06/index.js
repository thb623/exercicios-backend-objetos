const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const adultos = []
const jovens = []

for(let i = 0; i < usuarios.length; i++){
    if( usuarios[i].idade < 18){
        jovens.push(usuarios[i])
    }else if(usuarios[i].idade > 18){
        adultos.push(usuarios[i])
    }
}

console.log("jovens",jovens)
console.log("adultos",adultos)