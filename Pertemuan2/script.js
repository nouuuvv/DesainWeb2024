document.querySelectorAll('.nav-links a', '.btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Offset to account for fixed navbar
        behavior: 'smooth'
      });
    });
  });
  