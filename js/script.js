window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden'
    contenedor.style.opacity = '0';
}










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



var touch = Modernizr.touch;
$('.img-holder').imageScroll({
  imageAttribute: (touch === true) ? 'image-mobile' : 'image',
  touch: touch
});