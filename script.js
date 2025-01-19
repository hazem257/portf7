//let eff = document.getElementsByClassName(".typedText");
let eff = new Typed(".typedText",{
  strings : ["Designer .","Youtuber .","Developer .", "Cyber security Engineering ."],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
