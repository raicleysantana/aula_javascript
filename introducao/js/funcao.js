let idade = prompt("Digite sua idade");

function validarIdade(){
    var valida = false;
    if(idade){
        valida = true;
    }
    alert(idade);
    return valida;
}

validarIdade();
