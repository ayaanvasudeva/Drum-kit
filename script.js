var numberOfDrumButtons = document.querySelectorAll(".drum").length
for (var i = 0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var letter = this.innerHTML
  buttonAnimation(letter)
  if (letter === "w"){
    var hi = new Audio("sounds/crash.mp3");
    hi.play();
  }else if (letter === "a"){
     var sound = new Audio("sounds/kick-bass.mp3");
     sound.play();
  }else if (letter === "s"){
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
  }else if (letter === "d"){
     var sound = new Audio("sounds/tom-1.mp3");
     sound.play();
  }else if (letter === "j"){
     var sound = new Audio("sounds/tom-2.mp3");
     sound.play();
  }else if (letter === "k"){
     var sound = new Audio("sounds/tom-3.mp3");
     sound.play();
  }else if (letter === "l"){
     var sound = new Audio("sounds/tom-4.mp3");
     sound.play();
  }
  else{
    alert("A bug has occured")
  }



  
}) // all  buttons

}
document.addEventListener("keydown", function(event){
  var key = event.key
  buttonAnimation(key)
  if (key === "w"){
    var hi = new Audio("sounds/crash.mp3");
    hi.play();
  }else if (key === "a"){
     var sound = new Audio("sounds/kick-bass.mp3");
     sound.play();
  }else if (key === "s"){
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
  }else if (key === "d"){
     var sound = new Audio("sounds/tom-1.mp3");
     sound.play();
  }else if (key === "j"){
     var sound = new Audio("sounds/tom-2.mp3");
     sound.play();
  }else if (key === "k"){
     var sound = new Audio("sounds/tom-3.mp3");
     sound.play();
  }else if (key === "l"){
     var sound = new Audio("sounds/tom-4.mp3");
     sound.play();
  }
  
})
function buttonAnimation(key_pressed){
  var whichKey = document.querySelector("." + key_pressed);
  whichKey.classList.add("pressed");
  setTimeout(function(){
    whichKey.classList.remove("pressed");
  }, 100)
  
  

}
