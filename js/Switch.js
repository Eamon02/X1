const checkbox = document.querySelector(".checkbox"); 
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun")

// on change of checkbox, executes functions
// checkbox.addEventListener("change", AstroStyle, toggleAstro)
// checkbox.addEventListener("change", AstroStyle(), toggleAstro())

    //Change from TL to Astro TL
// function AstroStyle(){
//     moon.classList.toggle('dark');
//     sun.classList.toggle('dark');
// };

//Switch IF statment
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (!checkbox.checked) {
        // do this
        AstroStyle()
        AstroToggle()
        $('.tl-header').text("Time Lapse Calculator")
        $('#calc1').removeClass('hide')
        $('#calc2').addClass('hide')

        console.log('Checked');
      } else {
        // do that
        console.log('Not checked');
        $('.tl-header').text("Banana")
        $('#calc1').addClass('hide')
        $('#calc2').removeClass('hide')
        $('.tl-header').text("Astro Calculator")
      }
    });
  });

    // Change from TL to Astro TL
function AstroStyle(){
    moon.classList.toggle('dark');
    sun.classList.toggle('dark');
};

//Changes HTML content to astro
function AstroToggle(){

}