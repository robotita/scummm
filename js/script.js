// addEventListener("load",() => { 
// });


let arrCabeza = ['svg/cobb-1.svg','svg/cobb-2.svg', 'svg/cobb-3.svg', 'svg/cobb-4.svg'];
let arrCabezaRandom = ['svg/cabeza_adivino.svg','svg/cabeza_alien.svg', 'svg/cabeza_caralimon.svg', 'svg/cabeza_colgante.svg', 'svg/cabeza_doctor.svg', 'svg/cabeza_primo.svg'];


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