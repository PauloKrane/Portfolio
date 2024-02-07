const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Para lograr que una sección aparezca centrada en la pantalla al presionar un enlace en el menú
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('.nav-link');
  
  links.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          var targetId = this.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
              var offsetTop = targetElement.offsetTop;
              var body = document.body;
              var html = document.documentElement;
              var scrollTop = body.scrollTop || html.scrollTop;

              // Centra la sección en la pantalla
              var scrollTarget = offsetTop - (window.innerHeight - targetElement.clientHeight) / 2;

              // Realiza el desplazamiento suave
              window.scrollTo({
                  top: scrollTarget,
                  behavior: 'smooth'
              });
          }
      });
  });
});