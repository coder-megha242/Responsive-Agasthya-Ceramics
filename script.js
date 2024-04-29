

setTimeout(function myFunction(){
  var preloader = document.querySelector(".preloader");
  preloader.style.display = 'none';
}, 3000);

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*= '+ id +']').classList.add('active');
            });

        };
    });
};
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});


documents.querySelectorAll(".navbar-nav li a:not(.dropdown-toggle)")
      .forEach((link) => {
        link.addEventListener("click", () => {
          const navbarResponsive = document.getElementById(
            "myNav"
          );
          if (navbarResponsive.classList.contains("show")) {
            const navbarToggler = document.querySelector(".navbar-toggler");
            setTimeout(() => {
              navbarToggler.click();
            }, "1000");
          }
        });
      });


