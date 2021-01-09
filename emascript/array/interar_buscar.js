
const pessoas = ['raicley', 'santana', 'silva'];


const numeros = [1, 3, 5, 6, 7, 2];
numeros.unshift(2);
console.log(numeros);
//pessoas.forEach((pessoa,index) => console.log(index,pessoa));

//console.log(pessoas.indexOf('silva'));
//console.log(numeros.some(value => value % 2 === 0));

const students = [
    { name: 'raicley', grade: 7 },
    { name: 'zraicley1', grade: 4 },
    { name: 'raicley2', grade: 6 },
    { name: 'raicley3', grade: 7.5 },
    { name: 'raicley4', grade: 10 },
    { name: 'raicley5', grade: 8.5 }
];

console.log(students.some(student => student.grade >= 7));
console.log(students.filter(student => student.grade >= 7));
console.log(students.indexOf(student => student.grade >= 7));


//console.log(students.sort((current, next) => current.grade - next.grade));

console.log(students.sort((current, next) => current.name - next.name));

console.log(numeros.reduce((total, value) => total += value, 0));
