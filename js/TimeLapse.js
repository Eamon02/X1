const clipLength = document.querySelector(".clipLength").value;
const exposurLength = document.querySelector(".exposureLength").value;
const recordTime = document.querySelector(".recordTime").value;
const FPS = document.querySelector(".FPS").value;
const captureInterval = document.querySelector(".captureInterval").value;

pics()

function pics(){
    const numPhotos = document.querySelector(".numPhotos").value = clipLength * FPS;
}


console.log(FPS)

if(FPS === !FPS){
    FPS.value("24");
}

console.log(FPS)

// let photos = clipLength * FPS;
// numPhotos.innerHTML(photos);

// console.log(numPhotos)



