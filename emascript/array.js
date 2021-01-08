const pessoas = [
    'raicley', 'santana', 'silva'
];

const filtro = pessoas.filter(pessoas => pessoas === 'santana');
//console.log(filtro);

const novo = pessoas.map(pessoa => {
    pessoa = "teste";
    return pessoa;
});

console.log(novo);
