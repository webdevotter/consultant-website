const currentYear = document.getElementById('current-year');
const year = new Date().getFullYear();


currentYear.innerText = year;

const navbar = document.getElementById('navbar');
let scrolled = false;
window.onscroll = function(){
  if(window.scrollY > 100){
    navbar.classList.remove('top');
    if(!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function() {
      navbar.style.transform = 'translateY(0px)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
}




 
