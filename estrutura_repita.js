

       function acaoBotao(){
       var sairLoop, valor01, valor02
       do{
            valor01 = prompt("Digite o Primeiro Valor: ")
            valor02 = prompt("Digite o Segundo Valor: ")
            document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ) )
            sairLoop = prompt("Deseja Sair? S/N")
        } while  (sairLoop == "N")
       
	
      }

     