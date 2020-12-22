const checkbox = document.querySelector(".checkbox"); 
const moon = document.querySelector(".moon")
checkbox.addEventListener("change", () => {
    //Change from TL to Astro TL
    moon.classList.toggle('dark');

    //Changes HTML content to astro
    let Astro = $("#original")
    Astro.innerHTML = `<div class="col 6 new">
    <div class="input-field inline col s10 pics">
      <i class="material-icons prefix">schedule</i>
      <input placeholder="" id="clipLength" type="number" class="validate clipLength">
      <label for="clipLength">Clip Length</label>
    </div>

    <div class="input-field inline col s10 pics">
      <i class="material-icons prefix">theaters</i>
      <input value="24" id="FPS" type="number" class="validate FPS">
      <label for="FPS">Frames Per Second</label>
    </div>

    <div class="input-field inline col s10">
      <i class="material-icons prefix">camera_roll</i>
      <input disabled placeholder="" id="numPhotos" type="number" class="validate numPhotos">
      <label for="numPhotos">Number of Photos</label>
    </div>

    <div class="input-field inline col s10">
      <i class="material-icons prefix">shutter_speed</i>
      <input placeholder="" id="first_name" type="number" class="validate exposureLength">
      <label for="exposureLength">Exposure Length</label>
    </div>

    <div class="input-field inline col s10">
      <i class="material-icons prefix">alarm</i>
      <input placeholder="" id="recordTime" type="number" class="validate recordTime">
      <label for="recordTime">Record Time</label>
    </div>

    <div class="input-field inline col s10">
      <i class="material-icons prefix">add_a_photo</i>
      <input placeholder="" id="captureInterval" type="number" class="validate captureInterval">
      <label for="captureInterval">Capture Interval</label>
    </div>
  </div>"`;
  console.log(Astro)
})
