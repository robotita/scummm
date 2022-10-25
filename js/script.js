// addEventListener("load",() => { 
// });


let arrCabeza = ['svg/cobb-1.svg','svg/cobb-2.svg', 'svg/cobb-3.svg', 'svg/cobb-4.svg'];
let arrCabezaRandom = ['svg/cabeza_adivino.svg','svg/cabeza_alien.svg', 'svg/cabeza_caralimon.svg', 'svg/cabeza_colgante.svg', 'svg/cabeza_doctor.svg', 'svg/cabeza_primo.svg', 'svg/cabeza_viejo.svg'];


function rotar_imagen(arrImagenes, tiempo){
  arrImagenes = arrImagenes;
  var tiempo = tiempo;
  _img = document.getElementById('cabeza');

  _img.src = arrImagenes[0];
  var i=1;
  setInterval(function(){
    _img.src = arrImagenes[i];
    i = (i == arrImagenes.length-1)? 0 : (i+1);
  }, tiempo);
}

rotar_imagen(arrCabeza, 300);


function random() {
  rotar_imagen(arrCabezaRandom, 600);
  document.querySelector('body').classList.add("animationcolor");
  console.log(arrCabezaRandom)
}


//VALIDAR FORM

function validateForm(event) {
  let nombre = document.forms["formulario"]["nombre"].value;
  let email = document.forms["formulario"]["email"].value;
  let juego_favorito = document.forms["formulario"]["juego_favorito"].value;

  let errorform = document.getElementById('errorformulario');

  if (nombre == "") {
    errorform.innerHTML = '';
    errorform.innerHTML += '--Por favor escribí tu nombre--';
    return false;
  } else if(email =="") {
    errorform.innerHTML = '';
    errorform.innerHTML += '--Por favor escribí tu email--';
    return false;
  } else {
    errorform.innerHTML = '';
    errorform.innerHTML += 'GRACIAS <3';
    return false;
  } 
}