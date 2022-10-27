let arrCabeza = ['svg/cobb-1.svg', 'svg/cobb-2.svg', 'svg/cobb-3.svg', 'svg/cobb-4.svg'];
let arrCabezaRandom = ['svg/cabeza_adivino.svg', 'svg/cabeza_alien.svg', 'svg/cabeza_caralimon.svg', 'svg/cabeza_colgante.svg', 'svg/cabeza_doctor.svg', 'svg/cabeza_primo.svg', 'svg/cabeza_viejo.svg'];
let cabeza = document.getElementById('cabeza');
let cabezarandom = document.getElementById('cabezarandom');
cabezarandom.style.display = "none";

function cabeza_cobb() {
    tiempo = 200;
    _img = document.getElementById('cabeza');
    _img.src = arrCabeza[0];
    i = 1;
    setInterval(function() {
        _img.src = arrCabeza[i];
        i = (i == arrCabeza.length - 1) ? 0 : (i + 1);
    }, tiempo);
}

function cabeza_random() {
    tiempor = 100;
    _imgr = document.getElementById('cabezarandom');
    _imgr.src = arrCabezaRandom[0];
    ir = 1;
    setInterval(function() {
        _imgr.src = arrCabezaRandom[ir];
        ir = (ir == arrCabezaRandom.length - 1) ? 0 : (ir + 1);
    }, tiempor);
}

cabeza_cobb();
cabeza_random();

function random() {
    if (document.body.classList.contains('random')) {
        document.body.classList.remove('random');
        cabeza.style.display = "block";
        cabezarandom.style.display = "none";
        document.querySelector('body').classList.remove("animationcolor");
    } else {
        document.body.classList.add('random');
        cabeza.style.display = "none";
        cabezarandom.style.display = "block";
        document.querySelector('body').classList.add("animationcolor");
    }


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
    } else if (email == "") {
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
    .then(data => {
        let emoticons = data;
        let random = Math.floor(Math.random() * 20);
        let items = emoticons.slice(random / 2, random)
        return items.map(emoticon => {
            let li = createNode('li'),
                span = createNode('span');
            span.innerHTML = `${emoticon.character}`;
            append(li, span);
            append(ul, li);
        });
    })
    .catch(error => { console.log(error); })


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