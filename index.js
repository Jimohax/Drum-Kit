let allButtons = document.querySelectorAll(".drum").length;

// let audio = new Audio("sounds/tom-1.mp3");

for ( let i = 0; i < allButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      buttonClicked = this.innerHTML;
    switch (buttonClicked) {
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
    
});
};

// let audio = new Audio("sounds/tom-1.mp3");
// document.querySelector(".drum").addEventListener("click", function(){
//   audio.play();
// })


// let bellBoy = {
//   name: "Jamie",
//   age: 12,
//   experience: 2,
//   expertice: ["bathroom", "stairs", "dining"]

// };

// function BellBoy (name, age, experience, expertice ){
//   this.name = name;
//   this.age = age;
//   this.experience = experience;
//   this.expertice = expertice;
// }

// let bellBoy1 = new BellBoy("Jamie", 32, 10, ["bathroom", "dining", "stairs"]);

// console.log(bellBoy1.expertice);
