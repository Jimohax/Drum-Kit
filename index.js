//detecting button pressed
let allButtons = document.querySelectorAll(".drum").length;


for ( let i = 0; i < allButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      buttonClicked = this.innerHTML;
    makeSound(buttonClicked);

      buttonAnimation(buttonClicked);
});
};

//detecting keyboard pressed
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
    case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    case "k":
              let crash = new Audio("sounds/crash.mp3");
              crash.play();
              break;
    case "l":
                let kick = new Audio("sounds/kick.mp3");
                kick.play();
                break;
    default:
      break;
  }
  
}


function buttonAnimation(currentKey){
  activeButton = document.querySelector( "." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}


// function BellBoy (name, age, experience, expertice,){
//   this.name = name;
//   this.age = age;
//   this.experience = experience;
//   this.expertice = expertice;
//   this.cleanHouse = function(){
//     console.log("May i please clean your house?");
//   //   pickUpBroom();
//   //   clean();
//   }
// }

// let bellBoy1 = new BellBoy("Jamie", 32, 10, ["bathroom", "dining", "stairs"]);

// console.log(bellBoy1.cleanHouse);
