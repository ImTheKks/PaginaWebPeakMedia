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
