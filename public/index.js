    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

// Turns music on or off based on clicks
   const padControls =  pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
          sounds[index].play();
            

        pad.addEventListener("dblclick", function() {
            console.log("Double");
            sounds[index].pause();
    
        })
        
        });
      });
