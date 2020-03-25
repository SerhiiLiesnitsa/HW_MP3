
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
function MusicPlayer(audioUrl){
    this.audio = new Audio(audioUrl);
    this.addEvents;  
    }


    MusicPlayer.prototype.addEvents = function() {
        let that = this 
    document.querySelector('.Play').addEventListener('click', function(){    
        that.audio.play();
            
    });
    document.querySelector('.pause').addEventListener('click',function(){
        that.audio.pause();
    });
    document.querySelector('.stop').addEventListener('click',function(){
        that.audio.pause();
        that.audio.currentTime = 0;
    }); 
        
    };  
        
    const song = new MusicPlayer('https://st1.z1.fm/music/6/81/4-roses_are_red-oceans_(zvukoff.ru).mp3');
  song.addEvents();
        


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
