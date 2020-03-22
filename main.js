
// var x = document.getElementById("audio")
// function playAudio() {
//   x.play();
// }

// function pauseAudio() { 
//     x.pause(); 
// } 


// function stopAudio() {
//     x.pause();
//     x.currentTime = 0;
// }

function MusicPlayer(audio){
    this.audio = new Audio(audio);
    }
Audio.prototype.playAudio = function() {
    var x = window.getElementById("audio");
    x.play()
    }
Audio.prototype.pauseAudio = function() {
    x.pause()
    }
Audio.prototype.stopAudio = function() {
    x.pause();
    x.currentTime = 0;
    }


// Audio.prototype.Play = function Play() {document.querySelector('.Play').addEventListener('click', function(){    
//     this.audio.play()})};
// Audio.prototype.pause = function pause() {document.querySelector('.pause').addEventListener('click', function(){    
//     this.audio.play()})};
// Audio.prototype.stop = function stop() {document.querySelector('.stop').addEventListener('click', function(){    
//     this.audio.pause();
//         this.audio.currentTime = 0;})}

// MusicPlayer.prototype.click = function () {document.querySelector('.playAudio')}
// MusicPlayer.prototype.addEvents = function(){
  
// document.querySelector('.Play').addEventListener('click', function(){    
//     Audio.audio.play();
    
// })
