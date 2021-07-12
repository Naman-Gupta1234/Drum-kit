var noOfDrums = document.querySelectorAll(".drum").length;

// for (var i = 0; i < noOfDrums; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got Clicked!");
//     });
// }
for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();

    });
}