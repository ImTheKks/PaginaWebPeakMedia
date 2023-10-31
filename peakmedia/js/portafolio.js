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