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


// API
const ul = document.getElementById('emoticons'),
url = 'https://emoji-api.com/emojis?access_key=1673254c99169f9f92b4bcb92788ed3f1ab557b7';

const createNode = (element) => { return document.createElement(element); }
const append = (parent, el) => { return parent.appendChild(el); }

fetch(url)
  .then((response) => { return response.json(); })
  .then( data => {
    let emoticons = data;
    let random = Math.floor(Math.random() * 20);
    let items = emoticons.slice(random/2, random) 
    return items.map( emoticon => { 
      let li = createNode('li'), 
          span = createNode('span');
      span.innerHTML = `${emoticon.character}`; 
      append(li, span);
      append(ul, li);
    });
  })
  .catch( error => { console.log(error); })


// IR ARRIBA
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -800);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);