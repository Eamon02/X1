// const spaceship = document.querySelector('#spaceship');

$('#spaceship').on("click", launch)

function launch(){
    anime({
        targets: spaceship,
        translateX: [
            {value: 300, duration: 3000 },
            {value: 0, duration: 3000 },
        ],
        easing: 'spring(1, 50, 50, 10)'
    })
    
}