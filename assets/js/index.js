const btnMobile = document.querySelector("#btn__mobile")

function toggleMenu(){
  const nav = document.querySelector("#nav")
  nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)