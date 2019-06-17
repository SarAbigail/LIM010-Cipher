window.cipher = {
  encode:(offsetC,stringC) =>{
    let newtxtC='';
    let textCharC;
    for (let i=0;i<stringC.length; i++){
      let charC=stringC[i];
      if (charC.match(/[A-Za-z]/i)) {
        let toAscii=stringC.charCodeAt(i);
        //Para las mayúsculas
        if (toAscii>=65 && toAscii<=90){
          textCharC=(toAscii-65+parseInt(offsetC))%26+65;
          newtxtC+=String.fromCharCode(textCharC);
          //Para las minúsculas
        }else if(toAscii>=97 && toAscii<=122){
          textCharC=(toAscii-97+parseInt(offsetC))%26+97;
          newtxtC+=String.fromCharCode(textCharC);
        }
      }else{
        newtxtC+=charC;
      }
    }
    return newtxtC;
  },

  decode:(offsetD,stringD)=>{
    let newtxtD='';
    let textCharD;
      for (let i=0;i<stringD.length; i++){
        let charD=stringD[i];
        if (charD.match(/[A-Za-z]/i)) {
          let toAscii=stringD.charCodeAt(i);
          //Para las mayúsculas
          if (toAscii>=65&&toAscii<=90){
            textCharD=(toAscii+65-parseInt(offsetD))%26+65;
            newtxtD+=String.fromCharCode(textCharD);
            //Para las minúsculas
          }else if (toAscii>=97&&toAscii<=122) {
            textCharD=(toAscii-97-parseInt(offsetD)+52)%26+97;
            newtxtD+=String.fromCharCode(textCharD);
          }
        }else{
          newtxtD+=charD;
        }
      }
      return newtxtD;
    }
  };