const sentTo=document.getElementById('sent');
//muestra la pantalla 1
const sc1=document.getElementById('screen1');
sc1.classList.remove('hide');
//funcion enviar contraseña,oculta la pantalla 1 y muestra la pantalla 2
let login=0;
sentTo.addEventListener('click',()=>{
	const uPass=document.getElementById('password').value;
	if (login<2)
	{
		if (uPass==='LABORATORIA') 
		{
			document.getElementById('bienvenida').innerHTML='¡Bienvenidos!';
			document.getElementById('instruccion').innerHTML='Escoge una opción:';
			sc1.classList.add('hide');
			sc2.classList.remove('hide');
		}
		else
		{
			document.getElementById('error').innerHTML='¡Clave incorrecta!';
			login++;
			document.getElementById('password').value='';
		}
	}else
	{
		
		document.getElementById('error').innerHTML='¡Ya tuviste todos tus intentos!';
		let node=document.getElementById('password');
		let node2=document.getElementById('sent');
		let node3=document.getElementById('msg-1');
		node.parentNode.removeChild(node);
		node2.parentNode.removeChild(node2);
		node3.parentNode.removeChild(node3);
	}
});
const sc2=document.getElementById('screen2');
const sc3=document.getElementById('screen3');
const sc4=document.getElementById('screen4');
//funcion que oculta la pantalla 2 y muestra la pantalla 3 de CIFRAR.
const cipher=document.getElementById('cipher');
cipher.addEventListener('click',()=>{
	sc2.classList.add('hide');
	sc3.classList.remove('hide');
});
//función que oculta la pantalla 2 y muestra la pantalla 4 de DESCIFRAR.
const decipher=document.getElementById('decipher');
decipher.addEventListener('click',()=>{
	sc2.classList.add('hide');
	sc4.classList.remove('hide');
});
//funcion del boton ATRAS
const atrasCifrar=document.getElementById('backC');
atrasCifrar.addEventListener('click',()=>{
	sc1.classList.add('hide');
	sc3.classList.add('hide');
	sc4.classList.add('hide');
	sc2.classList.remove('hide');
});
//funcion del boton ATRAS
const atrasDescifrar=document.getElementById('backD');
atrasDescifrar.addEventListener('click',()=>{
	sc1.classList.add('hide');
	sc4.classList.add('hide');
	sc2.classList.remove('hide');
});
//para la funcion de CIFRAR
const sentCipher=document.getElementById('sentCipher');
sentCipher.addEventListener('click',()=>{
	let stringC=document.getElementById('inputCipher').value;
	let offsetC=document.getElementById('cOffset').value;
	let outputCipher=document.getElementById('outputCipher');
	outputCipher.value=window.cipher.encode(offsetC,stringC);
});
//para la funcion de DECIFRAR
const sentDecipher=document.getElementById('sentDecipher');
sentDecipher.addEventListener('click',()=>{
	let stringD=document.getElementById('inputDecipher').value;
	let offsetD=document.getElementById('dOffset').value;
	let outputDecipher=document.getElementById('outputDecipher');
	outputDecipher.value=window.cipher.decode(offsetD,stringD);
});
//funcion para copiar
const copyC=document.getElementById('copyCipher');
copyC.addEventListener('click',()=>{
	let textArea=document.getElementById('outputCipher');
	let answer='No soportado';
	textArea.select();
	try{
		let succ=document.execCommand('copy');
		succ;
	}catch(err){
		answer;
	}
});

const copyD=document.getElementById('copyDecipher');
copyD.addEventListener('click',()=>{
	let textArea=document.getElementById('outputDecipher');
	let answer='No soportado';
	textArea.select();
	try{
		let succ=document.execCommand('copy');
		succ;
	}catch(err){
		answer;
	}
});