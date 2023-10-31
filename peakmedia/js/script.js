let div = document.getElementById('div')

let arbol = document.getElementById('arbol')
let agua = document.getElementById('agua')
let m1 = document.getElementById('m1')
let m2 = document.getElementById('m2')
let m3 = document.getElementById('m3')

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;

    arbol.style.marginTop = value * 0 + 'px'
    agua.style.left = value * 0.5 + 'px'
    m1.style.top = value * 0.19 + 'px'
    m2.style.top = value * 0 + 'px'
    m3.style.top = value * 1 + 'px'
})



let ocultobtn = document.getElementById('ocultobtn');
let oculto = document.getElementById('oculto');

ocultobtn.addEventListener('click', toggleText);

function toggleText() {
    oculto.classList.toggle('show');

    if(oculto.classList.contains('show')) {
        ocultobtn.innerHTML = 'Ver Menos';
    }
    else{
        ocultobtn.innerHTML = 'Ver Más'
    }
}
var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 490) {
            nav.classList.add('navbar-scrolled', 'shadow', 'texto-blanco');
        }else{
            nav.classList.remove('navbar-scrolled', 'shadow', 'texto-blanco');
        }
        });


let ocultobtn2 = document.getElementById('ocultobtn2');
let edunop = document.getElementById('edunop');

ocultobtn2.addEventListener('click', toggle);

function toggle() {
    edunop.classList.toggle('edusi');

    if(edunop.classList.contains('edusi')) {
        ocultobtn2.innerHTML = 'Ver Menos';
    }
    else{
        ocultobtn2.innerHTML = 'Ver Más'
    }
}


let ocultobtn3 = document.getElementById('ocultobtn3');
let habilino = document.getElementById('habilino');

ocultobtn3.addEventListener('click', toggleH1);

function toggleH1() {
    habilino.classList.toggle('habilis');

    if(habilino.classList.contains('habilis')) {
        ocultobtn3.innerHTML = 'Ver Menos';
    }
    else{
        ocultobtn3.innerHTML = 'Ver Más'
    }
}


let ocultobtn4 = document.getElementById('ocultobtn4');
let habilitno = document.getElementById('habilitno');

ocultobtn4.addEventListener('click', toggleH2);

function toggleH2() {
    habilitno.classList.toggle('habilis');

    if(habilitno.classList.contains('habilis')) {
        ocultobtn4.innerHTML = 'Ver Menos';
    }
    else{
        ocultobtn4.innerHTML = 'Ver Más'
    }
}


let ocultobtn5 = document.getElementById('ocultobtn5');
let trabanop = document.getElementById('trabanop');

ocultobtn5.addEventListener('click', toggleH3);

function toggleH3() {
    trabanop.classList.toggle('trabasi');

    if(trabanop.classList.contains('trabasi')) {
        ocultobtn5.innerHTML = 'Ver Menos';
    }
    else{
        ocultobtn5.innerHTML = 'Ver Más';
    }
}



let botonmodal = document.getElementById('botonmodal');
let vmodal = document.getElementById('vmodal');
let ocultobtn6 = document.getElementById('ocultobtn6');

botonmodal.addEventListener('click', toggleH4);

function toggleH4() {
    vmodal.classList.add('vmodal-show');

    ocultobtn6.addEventListener('click', toggleH5);
}

    function toggleH5(){
        vmodal.classList.remove('vmodal-show');

}

let botonmodal2 = document.getElementById('botonmodal2');
let vmodal2 = document.getElementById('vmodal2');
let ocultobtn7 = document.getElementById('ocultobtn7');

botonmodal2.addEventListener('click', toggleH6);

function toggleH6() {
    vmodal2.classList.add('vmodal-show2');

    ocultobtn7.addEventListener('click', toggleH7);
}

    function toggleH7(){
        vmodal2.classList.remove('vmodal-show2');

}

let botonmodal3 = document.getElementById('botonmodal3');
let vmodal3 = document.getElementById('vmodal3');
let ocultobtn8 = document.getElementById('ocultobtn8');

botonmodal3.addEventListener('click', toggleH8);

function toggleH8() {
    vmodal3.classList.add('vmodal-show3');

    ocultobtn8.addEventListener('click', toggleH9);
}

    function toggleH9(){
        vmodal3.classList.remove('vmodal-show3');

}

let botonmodal4 = document.getElementById('botonmodal4');
let vmodal4 = document.getElementById('vmodal4');
let ocultobtn9 = document.getElementById('ocultobtn9');

botonmodal4.addEventListener('click', toggleH10);

function toggleH10() {
    vmodal4.classList.add('vmodal-show4');

    ocultobtn9.addEventListener('click', toggleH11);
}

    function toggleH11(){
        vmodal4.classList.remove('vmodal-show4');

}

