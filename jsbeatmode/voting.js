let functionPost = document.getElementById("postButton"); 
let btnToggler = document.querySelector(".topbox"); 


//Adding the event listener
functionPost.addEventListener("click", popupToggler);

    function popupToggler() {
        if (btnToggler.classList.contains("hidden")) {
            btnToggler.classList.remove("hidden");
            functionPost.textContent = "X";
        }
        else {
        btnToggler.classList.add("hidden");
        functionPost.textContent = "+";   
    }
}


