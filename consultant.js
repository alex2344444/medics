

   
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('subscribe-msg');
  msg.textContent = "Thanks for subscribing!";
  msg.style.opacity = 0;
  setTimeout(() => {
    msg.style.transition = 'opacity 1s';
    msg.style.opacity = 1;
  }, 100);
});
 

  function subscribe() {
    const email = document.querySelector('.footer-section input').value;
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
    } else {
      alert('Please enter a valid email.');
    }
  }
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.footer-section, .social-icons').forEach(el => {
    el.classList.add('fade-in-start');
    observer.observe(el);
  });

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".hire-btn").forEach(button => {
      button.addEventListener("click", () => {
        button.textContent = "Hired!";
        button.style.backgroundColor = "#2b9ab8";
        setTimeout(() => {
          button.textContent = "Hire";
          button.style.backgroundColor = "#42b8dd";
        }, 1500);
      });
    });
  });

   window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hire-btn');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.animation = 'fadeInUp 0.6s forwards';
      }, index * 200); // staggered
    });
  });