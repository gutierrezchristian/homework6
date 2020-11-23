var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100.0) + "%";
	console.log("Volume on start: " + vol);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Video Paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video Slowed Down");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video plaback rate: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Video Sped Up");
	video.playbackRate = video.playbackRate * 1.10;
	console.log("Video plaback rate: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Video Skipped");
	video.currentTime = video.currentTime + 5;
	console.log(video.currentTime);
	if (video.ended){
		video.currentTime = 0;
		console.log(video.currentTime);
		video.play()
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted = false;
		console.log("Video Unmuted")
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		console.log("Video Muted")
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = volumeSlider.value / 100.0;
	document.querySelector("#volume").innerHTML = (video.volume * 100.0) + "%";
	console.log("volumeSlider.value = " + video.volume);	
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});

