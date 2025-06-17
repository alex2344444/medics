function toggleMenu(element) {
  element.classList.toggle("active");
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle("active");

  const links = navLinks.querySelectorAll("li");

  // Animate nav links like pills dropping
  if (navLinks.classList.contains("active")) {
    links.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = "1";
        link.style.transform = "translateY(0)";
      }, index * 100);
    });
  } else {
    links.forEach((link) => {
      link.style.opacity = "0";
      link.style.transform = "translateY(-10px)";
    });
  }
}
