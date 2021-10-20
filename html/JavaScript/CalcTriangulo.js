
		function calcular() {
			var nota1, nota2, nota3, nota4, media;
			nota1=formMedia.numNota1.value;
			nota2=formMedia.numNota2.value;
			nota1=parseFloat(nota1);
			nota2=parseFloat(nota2);
			
			media=(nota1+nota2)/2;
			formMedia.numMedia.value=media;
			}
