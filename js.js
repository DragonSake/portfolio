 window.addEventListener('scroll', function () {
     var nav = document.querySelector('nav');

     if (window.scrollY > 50) {
         nav.style.backgroundColor = 'rgba(14, 11, 33, 0.8)';
     } else {
         nav.style.backgroundColor = 'transparent';
     }
 });