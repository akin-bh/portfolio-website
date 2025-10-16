// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Simple hero carousel
;(function () {
  const carousel = document.getElementById('heroCarousel')
  if (!carousel) return

  const track = carousel.querySelector('.carousel__track')
  const slides = Array.from(track.children)
  const prevBtn = carousel.querySelector('.carousel__nav--prev')
  const nextBtn = carousel.querySelector('.carousel__nav--next')
  let currentIndex = 0
  const slideCount = slides.length
  const intervalMs = 4000
  let timer = null

  function goTo(index) {
    currentIndex = (index + slideCount) % slideCount
    // compute exact offset using the slide's offsetLeft (accounts for gap and responsive widths)
    const targetSlide = slides[currentIndex]
    const offset = targetSlide.offsetLeft
    // apply transform using GPU-accelerated translate3d for smoother animations
    track.style.transform = `translate3d(-${offset}px, 0, 0)`
  }

  function next() { goTo(currentIndex + 1) }
  function prev() { goTo(currentIndex - 1) }

  nextBtn.addEventListener('click', () => { next(); resetTimer(); })
  prevBtn.addEventListener('click', () => { prev(); resetTimer(); })

  function startTimer() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer = setInterval(next, intervalMs)
  }
  function stopTimer() { if (timer) { clearInterval(timer); timer = null } }
  function resetTimer() { stopTimer(); startTimer(); }

  carousel.addEventListener('mouseenter', stopTimer)
  carousel.addEventListener('mouseleave', startTimer)
  carousel.addEventListener('focusin', stopTimer)
  carousel.addEventListener('focusout', startTimer)

  // initialize positions
  window.addEventListener('load', () => {
    // ensure slides widths are calculated
    goTo(0)
    startTimer()
    // reflow on resize
    window.addEventListener('resize', () => { 
      // small debounce to avoid jank on resize
      clearTimeout(window._carouselResizeTimeout)
      window._carouselResizeTimeout = setTimeout(() => { goTo(currentIndex) }, 120)
    })
  })
})()
