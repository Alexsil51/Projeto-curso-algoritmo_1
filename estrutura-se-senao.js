              

               function acaoBotao(){
               var valor01, valor02, resultado, operacao
               valor01 = prompt("Digite o Primeiro Valor: ")
               operacao = prompt("Digite a opera��o: EX: + , - , * , /")
               valor02 = prompt("Digite o Segundo Valor: ")


               if (operacao == "+" entao){
                   resultado = parseInt(valor01) + parseInt (valor02)
               }else if (operacao == "-") {
                   resultado = parseInt(valor01) - parseInt (valor02)
               }else if (operacao == "*") {
                   resultado = parseInt(valor01) * parseInt (valor02)
               }else if (operacao == "/") {
                   resultado = parseInt(valor01) / parseInt (valor02)
               }

               document.getElementById("paragrafo").innerText = resultado
			   }

               