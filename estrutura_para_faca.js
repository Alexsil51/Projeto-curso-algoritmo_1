
/*

         numero, fatorial, contador: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
       escreva("Digite o N�mero para Calcular o Fatorial: ")
       leia (numero)
       
       fatorial := 1
       
       para contador de 1 ate numero faca
       fatorial := fatorial * contador
       
       fimpara

       */

       function acaoBotao(){
        var numero, fatorial

        numero = prompt("Digite o N�mero para Calcular o Fatorial: ")
        fatorial = 1

        for (var contador = 1; contador <= numero; contador++){
      fatorial = fatorial * contador
      
		}


         document.getElementById("paragrafo").innerText = "O Fatorial de " + numero + " �: " + fatorial
	   }
       

      