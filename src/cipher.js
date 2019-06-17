window.cipher = {
  encode:(offsetC,stringC) =>{
    //Se declara una cadena vacía que recibirá el texto cifrado.
    let newtxtC='';
    //Se declara la variable que recibirá el resultado en número ascii.
    let textCharC;
    //Se recorre toda la cadena ingresada.
    for (let i=0;i<stringC.length; i++){
      //la variable recibe el valor de toda la cadena.
      let charC=stringC[i];
      //Valida que lo contenido en la variable charC coincida con el regex.
      if (charC.match(/[A-Za-z]/i)) {
        //Encuentra el numero ascii de la letra ingresada.
        let toAscii=stringC.charCodeAt(i);
        //Se valida que el valor ascii esté en el rango de las mayúsculas.
        if (toAscii>=65 && toAscii<=90){
          //A textCharC se le asigna el resultado obtenido despues de aplicarse la fórmula de cifrado para mayúsculas.
          textCharC=(toAscii-65+parseInt(offsetC))%26+65;
          //Construye una cadena a partir del resultado.
          newtxtC+=String.fromCharCode(textCharC);
          //Se valida que el valor ascii esté en el rango de las minúsculas.
        }else if(toAscii>=97 && toAscii<=122){
          //A textCharC se le asigna el resultado obtenido despues de aplicarse la fórmula de cifrado para minúsculas.
          textCharC=(toAscii-97+parseInt(offsetC))%26+97;
          //Construye una cadea a partir del resultado en numero ascii.
          newtxtC+=String.fromCharCode(textCharC);
        }
      }else{
        //Devuelve el valor sin modificar si es que no cumple con la condicion del regex.
        newtxtC+=charC;
      }
    }
    //retorna el resultado después de cifrarlo.
    return newtxtC;
  },

  decode:(offsetD,stringD)=>{
    //Se declara una cadena vacía que recibirá el texto cifrado.
    let newtxtD='';
    //Se declara la variable que recibirá el resultado en número ascii.
    let textCharD;
    //Se recorre toda la cadena ingresada.
    for (let i=0;i<stringD.length; i++){
      //la variable recibe el valor de toda la cadena.
      let charD=stringD[i];
      //Valida que lo contenido en la variable charC coincida con el regex.
      if (charD.match(/[A-Za-z]/i)) {
        //Encuentra el número ascii de la letra ingresada.
        let toAscii=stringD.charCodeAt(i);
        //Valida que el valor ascii esté en el rango de las mayúsculas.
        if (toAscii>=65&&toAscii<=90){
          //A textCharD se le asigna el resultado obtenido después de aplicarse la fórmula de decifrado para mayúsculas.
          textCharD=(toAscii+65-parseInt(offsetD))%26+65;
          //Construye una cadena a partir del resultado en ascii.
          newtxtD+=String.fromCharCode(textCharD);
          //Valida que el valor ascii esté en el rango de las minúsculas.
        }else if (toAscii>=97&&toAscii<=122) {
          //A textCharD se le asigna el resultado obtenido después de aplicarse la fórmula de decifrado para minúsculas.
          textCharD=(toAscii-97-parseInt(offsetD)+52)%26+97;
          //Construye una cadena a partir del resultado en ascii.
          newtxtD+=String.fromCharCode(textCharD);
        }
      }else{
        //Devuelve el valor sin modificar si es que no cumple con la condicion del regex.
        newtxtD+=charD;
      }
    }
    //retorna el resultado después de decifrarlo.
    return newtxtD;
  }
};