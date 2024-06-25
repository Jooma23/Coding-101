// alert("javascript is working");

/*

> Put event listeners on all boxes (click); - done
> When a box is clicked, return it's repective #id; - done
> print the id to the console.log; - done
> add styling to that id; - done
> play with general and specific styling;

*/

// To add event listener on all items
for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", testingEventClicks);
}

// Event listener fn; prints id number  
function testingEventClicks() {
    window.boxClicked = this.id;
    console.log(boxClicked + " should change to white");
    changeColor();
} 

// Changes the color
function changeColor() {
    var boxToChange = document.getElementById(boxClicked);
    // boxToChange.style.color = "white";
    boxToChange.style.transition = "all 2s ease-out";
}



