var partes = ['ombro', 'joelhos'];

var musicas = ['cabeca', ...partes, 'e', 'pés'];

//console.log(musicas);

let arr = [3, 5, 7];

arr.foo = 'hello';

for (let i in arr) {
    // console.log(arr);
}


let numeros = [0, 1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
    if (i == 4) {
        continue;
    }

    console.log(i);
}