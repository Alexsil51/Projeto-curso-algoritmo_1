
/*

         numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
       escreva("Digite o Número para Calcular o Fatorial: ")
       leia (numero)
       
       fatorial := 1
       
       para contador de 1 ate numero faca
       fatorial := fatorial * contador
       
       fimpara

       */

       function acaoBotao(){
        var numero, fatorial

        numero = prompt("Digite o Número para Calcular o Fatorial: ")
        fatorial = 1

        for (var contador = 1; contador <= numero; contador++){
      fatorial = fatorial * contador
      
		}


         document.getElementById("paragrafo").innerText = "O Fatorial de " + numero + " é: " + fatorial
	   }
       

      