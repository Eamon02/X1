const checkbox = document.querySelector(".checkbox"); 
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun")

// on change of checkbox, executes functions
checkbox.addEventListener("change", AstroStyle, toggleAstro)
// checkbox.addEventListener("change", AstroStyle(), toggleAstro())

    //Change from TL to Astro TL
function AstroStyle(){
    moon.classList.toggle('dark');
    sun.classList.toggle('dark');
};

//Changes HTML content to astro
let Astro = false; // set the nav as closed by default
function toggleAstro() {
    if (!Astro) { // if opened is false (ie nav is closed), open the nav
        dayTime()
    } else { // else, if opened is ture (ie nav is open), close the nav
        nightTime();
    }
    Astro = !Astro; // negate boolean to get opposite (t to f, and f to t)
}

function dayTime(){
    console.log("daytime")
}

function nightTime(){
    console.log("nighttime")
}