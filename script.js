const scrollContainer = document.querySelector('.scroll-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft += 50; // Menggulir 50 piksel ke kanan
});

prevBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft -= 50; // Menggulir 50 piksel ke kiri
});

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
  
  
  
