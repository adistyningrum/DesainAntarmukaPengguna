document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) { // Ubah warna setelah digulir ke bawah sejauh 100 piksel (sesuaikan sesuai kebutuhan)
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbrand');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) { // Ubah warna setelah digulir ke bawah sejauh 100 piksel (sesuaikan sesuai kebutuhan)
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  });
  
  
  
