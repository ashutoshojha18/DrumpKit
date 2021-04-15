

// Detecting button press.

var numberOfDrumButton = document.querySelectorAll(".drum").length; //for collecting the length of buttons

// use loop to excute multiple times.

for (i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        // this.style.color = "white";   //just for checking 


        var buttonInnerHtml = this.innerHTML; //use this to get every event

        makeSound(buttonInnerHtml);  // to pass the function for innerhtml got pressed.

        buttonAnimation(buttonInnerHtml);     //for animation calling function.
    }
}



// Detecting keyboard press.

document.addEventListener("keydown", function (event) {   //to see which keyboard button is pressed
    makeSound(event.key);   //use this to get which key is pressed.

    buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }

}


// for animation

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);     //dot use for class name

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}