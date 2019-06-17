window.cipher = {
  encode:(offsetC,stringC) =>{
    let outputCipher='';
    for (let i=0;i<stringC.length; i++){
      let charC=stringC[i];
      if (charC.match(/[A-Z]/i)) {
        let toAscii=stringC.charCodeAt(i);
        //Para las mayúsculas
        if (toAscii>=65 && toAscii<=90){
          let textCharC=(toAscii-65+parseInt(offsetC))%26+65;
          outputCipher+=String.fromCharCode(textCharC);
        }
      }else{
        outputCipher+=charC;
      }
    }
    return outputCipher;
  },

  decode:(offsetD,stringD)=>{
    let outputDecipher='';
      for (let i=0;i<stringD.length; i++){
        let charD=stringD[i];
        if (charD.match(/[A-Z]/i)) {
          let toAscii=stringD.charCodeAt(i);
          //Para las mayúsculas
          if (toAscii>=65&&toAscii<=90){
            let textCharD=(toAscii+65-parseInt(offsetD))%26+65;
            outputDecipher+=String.fromCharCode(textCharD);
          }
        }else{
          outputDecipher+=charD;
        }
      }
      return outputDecipher;
    }
  };