const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})








var app = function () {
  var body = void 0;
  var menu = void 0;
  var menuItems = void 0;

  var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav-list-item');

      applyListeners();
  };

  var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
          return toggleClass(body, 'nav-active');
      });
  };

  var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
  };

  init();
}();





let div = document.getElementById('div')

let arbol = document.getElementById('arbol')
let agua = document.getElementById('agua')
let m1 = document.getElementById('m1')
let m2 = document.getElementById('m2')
let m3 = document.getElementById('m3')

window.addEventListener('scroll',function(){
  let value = this.window.scrollY;

  arbol.style.marginTop = value * -0 + 'px'
  agua.style.top = value * -0 + 'px'
  m1.style.top = value * -0 + 'px'
  m2.style.top = value * 0 + 'px'
  m3.style.top = value * 0.5 + 'px'
})







//Source https://stackoverflow.com/questions/39428557/css-javascript-how-to-make-rotating-circular-menu-with-multiple-states#answer-39429290

const buttons = Array.from(document.querySelectorAll('.button'))
const count = buttons.length
const increase = Math.PI * 2 / buttons.length
const radius = 255
let angle = 0

buttons.forEach((button, i) => {
  button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + 'px'
  button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + 'px'
  button.addEventListener('click', move)
})

function move(e) {
  const n = buttons.indexOf(e.target)
  const endAngle = (n % count) * increase
  turn()
  function turn() {
    if (Math.abs(endAngle - angle) > 1/8) {
      const sign = endAngle > angle ? 1 : -1
      angle = angle + sign/8
      setTimeout(turn, 20)
    } else {
      angle = endAngle
    }
    buttons.forEach((button, i) => {
      button.style.top = Math.sin(-Math.PI / 2 + i * increase - angle) * radius + 'px'
      button.style.left = Math.cos(-Math.PI / 2 + i * increase - angle) * radius + 'px'
    })
  }
}


//CONTENT
jQuery('.item').first().addClass('is-active');
jQuery('.button').on('click', function(){
    var order = jQuery(this).attr('data-order');
    
    jQuery('.item').removeClass('is-active');
    jQuery('.item[data-content="' + order + '"]').addClass('is-active');
});




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
       