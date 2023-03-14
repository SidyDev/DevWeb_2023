const nome = "Borges"
const sobrenome = "Costta"
const idade = 25
const peso = 60
const altura = 1.70
let imc = peso / (altura * altura)
let anoNasc = 2023 - idade

// Template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)} ${nome} nasceu em ${anoNasc}.`)