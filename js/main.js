// const nav = document.querySelector("nav");

// window.addEventListener('scroll',()=>{
//     if(scrollY>60){
//         nav.classlist.add("scrolled");
//     }
// })
// add " Scrolled" in the "nav-desktop" at header>wrapper>nav-desktop &&& "scrolled-img" in the "img" tag at header>wrapper>hero-section>right-side>img with Js to make the nav sticky
// mobile menu active class add for click event
const mobileMenu = document.querySelector(".menu-m");
const hamburgerMenuBtn = document.querySelector(".hamburger-icon");
const crossbutton = document.querySelector("#cross-btn");

hamburgerMenuBtn.addEventListener("click", function () {
	console.log("hamburger menu clicked");
	mobileMenu.classList.add("mobile-active");
});
crossbutton.addEventListener("click", function () {
	console.log("hamburger menu clicked");
	mobileMenu.classList.remove("mobile-active");
});
