
/*
nome: caractere
idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreva("Digite a Quantidade de Vezes que Vai ser Verificado a Idade")
     leia(limite)
     contador := 0
     enquanto contador < limite faca
     escreva("Digite o Nome da Pessoa: ")
     leia(nome)
     escreva("Digite a Idade do ", nome, ": ")
     leia (idade)
     se idade > 18 entao
     escreval(nome, " Voce é Maior de Idade!")
     senao
       escreval(nome, " Voce é Menor de Idade!")
       fimse
       contador := contador + 1
       fimenquanto

       */
       function acaoBotao(){
       var nome, idade, limite, contador
       limite = prompt("Digite a Quantidade de Vezes que Vai ser Verificado a Idade")
     contador = 0
     while(contador < limite){
      nome = prompt("Digite o Nome da Pessoa: ")
      idade = prompt("Digite a Idade do " + nome)
      if (idade > 18)
      document.getElementById("paragrafo").innerText = nome + " Voce é Maior de Idade!"
      else
      document.getElementById("paragrafo").innerText = nome + " Voce é Menor de Idade!"
      contador++
      }
      }