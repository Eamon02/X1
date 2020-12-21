// var photos = Number

$(".pics").on("change", "input", picsFunc)

function picsFunc(){
    // alert(e.target.value);
    let clipVal = $("#clipLength").val();
    let FPSVal = $("#FPS").val();
    // console.log(clipVal,FPSVal)
    let photos = clipVal*FPSVal;
    // console.log(photos)    
    $("#numPhotos").val(photos)
    // Capture(photos)
}

$("#recordTime").on("change", Capture)

function Capture(photos){
    let recordTime = $("#recordTime").val();
    photos = $("#numPhotos").val()
    // console.log(recordTime)
    let interval = photos/(recordTime*60);
    $("#captureInterval").val(interval*100)
}