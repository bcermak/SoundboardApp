    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");


    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
          sounds[index].play();
        
        });
      });

      pads.forEach((pad, index) => {
        pad.addEventListener("dblclick", function() {
        console.log("Double");
        sounds[index].pause();

    })
    })
