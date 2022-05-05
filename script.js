let navIcon = document.querySelector(".mobile-nav-icon");
let mobileNav = document.querySelector(".mobile-nav");
let closeMobileNavButton = document.querySelector(".mobile-nav-button");
let mobileNavOptions = document.querySelectorAll(".mobile-nav-options h3");

navIcon.addEventListener("click", () => {
	mobileNav.classList.add("opened-menu");
});

closeMobileNavButton.addEventListener("click", () => {
	mobileNav.classList.remove("opened-menu");
});

mobileNavOptions.forEach((element) => {
	element.addEventListener("click", () => mobileNav.classList.remove("opened-menu"));
});
