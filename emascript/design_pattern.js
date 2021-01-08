//FACTORY
//SINGLETON
// DECORATOR
// OBSERVER
// MODULE

//De acordo com o código abaixo, as alternativas corretas são: 
//R: 1,3,4

//De acordo com o código abaixo, selecione a alternativa em que todas as comparações retornam true:
//r: 1,3,4

//Analise a classe abaixo e seleciona a alternativa em que todas as afirmações são corretas:
As afirmativas abaixo são:
I   - É possível chamar o método "incrementaContador" sem instanciar a classe ID pois o método possui a palavra-chave static.
II  - A saídas dos console.log são respectivamente: "Contador atual: 1." e "Contador atual: 3.".
III - É possível instanciar a classe ID mas sua instancia não herdará os atributos/métodos com a palavra-chave static.
IV  - Quando uma função possui todos os atributos/métodos static não é possível chamá-la com a palavra-chave new.
V   - Métodos que possuem a palavra-chave static, só podem ser chamados por outros métodos static.
//1,2,3

Analise o código abaixo:

function Conta() {}
Conta.prototype.rendimento = 0;
Conta.prototype.depositar = function() {}
Conta.prototype.retirar = function() {}
Conta.prototype.exibirSaldo = function() {
  return `O saldo da conta é: ${this.saldo}.`
  //1,5