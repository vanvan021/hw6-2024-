var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop=false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

});

//document.querySelector("#play").addEventListener("click", function() {
//	console.log("Play Video");
// });


// Play button event listener
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	console.log("Volume is at " + video.volume * 100 + "%");
  });



// Pause button event listener
document.querySelector("#pause").addEventListener("click", function() {
  video.pause();
  console.log("Pause Video");
});

// Slow down button event listener
document.querySelector("#slower").addEventListener("click", function() {
  video.playbackRate *= 0.9;
  console.log("New speed is " + video.playbackRate);
});


// Speed up button event listener
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
  });


  // Skip ahead button event listener
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
	  video.currentTime = 0;
	} else {
	  video.currentTime += 10;
	}
	console.log("Current location is " + video.currentTime);
  });


  // Mute button event listener
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
	  video.muted = false;
	  this.textContent = "Mute";
	} else {
	  video.muted = true;
	  this.textContent = "Unmute";
	}
	console.log("Muting video: " + video.muted);
  });


// Event listener for the play button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	// Update the volume display when the video starts playing
	updateVolumeDisplay(video.volume);
  });
  
  // Event listener for the volume slider
  document.querySelector("#slider").addEventListener("input", function(event) {
	let newVolume = event.target.value / 100;
	video.volume = newVolume;
	updateVolumeDisplay(newVolume);
  });
  
  // Function to update the volume display
  function updateVolumeDisplay(volume) {
	let volumePercentage = Math.round(volume * 100);
	document.querySelector("#volume").textContent = "" + volumePercentage + "%";
	console.log("Volume is at " + volumePercentage + "%");
  }



document.querySelector("#vintage").addEventListener("click", function() {
	console.log("vinatge");
	video.classList.add("oldSchool");
  }
);

document.querySelector("#orig").addEventListener("click", function() {
	console.log("original");
	video.classList.remove("oldSchool");
  }
);
