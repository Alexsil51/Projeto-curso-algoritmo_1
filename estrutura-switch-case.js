


               function acaoBotao(){
               var valor01, valor02, resultado, operacao
               valor01 = prompt("Digite o Primeiro Valor: ")
               operacao = prompt("Digite a operação: EX: + , - , * , /")
               valor02 = prompt("Digite o Segundo Valor: ")

               switch (operacao){
               case "+":
               resultado = parseInt(valor01) + parseInt (valor02)
               breack;
               

               case "-":
               resultado = parseInt(valor01) - parseInt (valor02)
               breack;


               case "*":
               resultado = parseInt(valor01) * parseInt (valor02)
               breack;

                case "/":
               resultado = parseInt(valor01) / parseInt (valor02)
               breack;

               }

               document.getElementById("paragrafo").innerText = resultado
			   }

