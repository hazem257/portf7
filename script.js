//let eff = document.getElementsByClassName(".typedText");
let eff = new Typed(".typedText",{
  strings : ["Designer .","Youtuber .","Developer .", "Cyber security Engineering ."],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})
/*start dark mode */
let cha = document.getElementById("mylink");
let dar0 = document.getElementById("dar");
let origin = 'style.css';
let newHref = 'dark.css';
let isorigin = true ;
const image = document.getElementById('my-image');

dar0.addEventListener('click',()=>{
  if(isorigin){
    cha.setAttribute('href',newHref);
    
  image.src = 'icons8-sun.svg';
  }else{
    cha.setAttribute('href',origin)
  image.src = 'icons8-moon-48.png';
  }
  isorigin=!isorigin
})


/*DARK MODE */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
