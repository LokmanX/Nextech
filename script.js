let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
let sections = document.querySelectorAll('.scroll');
sections.forEach(sec =>{
  console.log(sec);
})
window.onscroll = ()=>{
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 350;
    let height = section.offsetHeight;

    if(top >= offset && top <= offset + height){
      section.classList.add('show_animate');
    }
    
  });
}

let mainLogo = document.querySelector('.container .content .image img');
let joinUsButton = document.querySelector('.description button');
let navbar = document.querySelector('.navBar');
let description = document.querySelector('.sub-title');
let p = document.querySelector('.main-box .description p');
let media = document.querySelector('.media');
window.onload = ()=>{
  mainLogo.style.opacity = '100';
  mainLogo.style.transform = 'translateY(0%)';
  navbar.style.transform = 'translateY(0%)';
  navbar.style.opacity = '100';
  p.style.transform = 'translateY(0%)';
  p.style.opacity = '100';
  media.style.transform = 'translateY(0%)';
  media.style.opacity = '100';
  description.style.transform = 'translateY(0%)';
  description.style.opacity = '100';
  joinUsButton.style.animation = 'move 2s ease 0s forwards';
}

let bars = document.querySelector(".bar");
let menu = document.querySelector(".menu ul");
bars.addEventListener("click", ()=>{
  if(menu.classList.contains('show')){
      menu.classList.remove('show');
      document.body.style.overflowY = 'scroll';

  }
  else{
      menu.classList.add('show');
      document.body.style.overflow = 'hidden';
  }
})