// Hambuger menu and close menu function
let hambrger_menu = document.getElementById('hamburger-menu')
console.log(hambrger_menu)
let close_menu = document.getElementById('close-bar')
console.log(close_menu)
let dropdown = document.querySelector('.nav-card')
console.log(dropdown)

hambrger_menu.addEventListener('click', () => {
  dropdown.classList.add('display')
})

close_menu.addEventListener('click', () => {
  dropdown.classList.remove('display')
})

// scrolling effect function

const scrollLinks = document.querySelectorAll('.scroll-link')

for (const link of scrollLinks) {
  link.addEventListener('click', event => {
    event.preventDefault()
    const targetId = link.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    const targetPosition = targetElement.offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000
    let start = null

    function step (timestamp) {
      if (!start) {
        start = timestamp
      }
      const progress = timestamp - start
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      )
      if (progress < duration) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  })
}

function easeInOutCubic (t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}

// slide in

const sections = document.querySelectorAll('.page')

function checkSection () {
  for (const section of sections) {
    const sectionTop = section.getBoundingClientRect().top
    const sectionBottom = section.getBoundingClientRect().bottom
    const screenHeight = window.innerHeight
    if (sectionTop < screenHeight && sectionBottom > 0) {
      section.classList.add('active')
    } else {
      section.classList.remove('active')
    }
  }
}

window.addEventListener('scroll', checkSection)
window.addEventListener('load', checkSection)

// typer
var typed = new Typed('#output-text', {
  strings: [
    'Quadri Kobiowu...',
    ' a Frontend Developer...',
    'a Web Developer...',
    'a Coding Instructor...'
  ],
  typeSpeed: 100,
  loop: true
})
