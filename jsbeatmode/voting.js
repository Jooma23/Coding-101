const postBtn = document.getElementById("post-btn")
const titleInput = document.getElementById("title")
const descrInput = document.getElementById("desc")
const categoryInput = document.getElementById("category") 
const btnToggler = document.querySelector(".topbox")
const ulElement = document.querySelector("ul")
let charCounter = document.getElementById("charCount")


// Attempting a constructor function to create an object that can be replicated multiple times
function FeatureItem (name, description, theme, numUpvotes, numDownvotes) {
    this.name = name
    this.description = description
    this.theme = theme
    this.numUpvotes = numUpvotes
    this.numDownvotes = numDownvotes
}

function Submit() {
    let featureTwo = new FeatureItem(titleInput.value, descrInput.value, categoryInput.value, 17, 17)
    ulElement.innerHTML = 
    `<li class="featurebox">
        <p>${featureTwo.name}: <span>${featureTwo.description}</span></p>
        <span class="category">${featureTwo.theme}</span>
        <div class="voting">
        <button class="thumb">👍 ${featureTwo.numUpvotes}</button>
        <button class="thumb">👎 ${featureTwo.numDownvotes}</button>
        </div>
    </li>`
    popupToggler()
    clearAllFields()
}

function clearAllFields() {
    titleInput.value = "" 
    descrInput.value = ""
    categoryInput.value = ""
}

// Dynamic character counter for description field
descrInput.addEventListener("input", () => {
    let charLength = descrInput.value.length;
    
    if (charLength === 0) {
        charCounter.classList.add("hidden")
    }
    else if (charLength > 35) 
        charCounter.style.color = "red"
    else {
        charCounter.classList.remove("hidden")
        charCounter.style.color = "black"
        charCounter.textContent = 35 - charLength;
}
})


//Button for New Feature Request
postBtn.addEventListener("click", popupToggler)
function popupToggler() {
    if (btnToggler.classList.contains("hidden")) {
            btnToggler.classList.remove("hidden")
            postBtn.textContent = "X"
    }
    else {
    btnToggler.classList.add("hidden")
    postBtn.textContent = "+"
    }
}

/* List of work to complete: 

- Add a manual object array using constructor functions [Done]
- Ensure the placeholder ones are using the constructor functions [Done]
- newItem() to add this to the [Done]
- LEARN AND USE FOR LOOPS
- Add key/values to local storage: 
    > Feature Name
    > Description 
    > upvotes: 1
    > downvotes: 1
- upvote() and downvote()
    > increments the number to localStorage

- countingChar()
- errorHandling() to ensure that if an up AND down is clicked, they behave properly
- More styling
- Instead of storing in localStorage, store everything in a Firebase db. Then, you can do unAuth voting

*/