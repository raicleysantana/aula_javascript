const students = [
    {
        name : "raicley",
        grade : 7,
    },
    {
        name : "santana",
        grade : 4,
    },
    {
        name : "silva",
        grade : 5,
    },
    {
        name : "teste1",
        grade : 7,
    },
    {
        name : "teste2",
        grade : 10,
    }
];

const aprovados = function getAlunosAprovados(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}


function getAlunosReprovados(studentsList) {
    return studentsList.filter(student => student.grade < 7);
}

console.log(aprovados(students));