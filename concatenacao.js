// JavaScript source code
/*  Var
// Se��o de Declara��es das vari�veis 
           nome: caracter
           numero: real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
      escreval ("Digite o nome:")
      leia (nome)
      escreval("Digite o N�mero:")
      leia (numero)
      
      escreval(nome, " : ", numero)

      */

      var nome, numero

      nome = prompt("Digite o Seu Nome: ")
      numero = prompt("Digite o Seu N�mero: ")

      document.getElementById("paragrafo").innerText = nome + " : " + numero