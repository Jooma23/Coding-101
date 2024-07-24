const postBtn = document.getElementById("post-btn")
const titleInput = document.getElementById("title")
const descrInput = document.getElementById("desc")
const categoryInput = document.getElementById("category") 
const btnToggler = document.querySelector(".topbox")
const ulElement = document.querySelector("ul")
let charCounter = document.getElementById("charCount")
let featureList = []

// Attempting a constructor function to create an object that can be replicated multiple times
function FeatureItem (name, description, theme, numUpvotes, numDownvotes, userVote) {
    this.name = name
    this.description = description
    this.theme = theme
    this.numUpvotes = numUpvotes
    this.numDownvotes = numDownvotes
    this.userVote = userVote
}

// Load and render features from local storage on/beyond startup
loadAndRenderFeatures()
btnToggler.classList.add("hidden")


function loadAndRenderFeatures() {
    const storedFeatures = localStorage.getItem("featureList")
    if (storedFeatures) {
        featureList = JSON.parse(storedFeatures)
    }
    
    ulElement.innerHTML = ""
    for (let i = 0; i < featureList.length; i++) {
        let feature = featureList[i]
        ulElement.innerHTML += 
        `<li class="featurebox" data-index="${i}">
            <p>${feature.name}: <span>${feature.description}</span></p>
            <span class="category">${feature.theme}</span>
            <div class="voting">
                <button class="thumb up">👍 ${feature.numUpvotes}</button>
                <button class="thumb down">👎 ${feature.numDownvotes}</button>
            </div>
        </li>`
    }
}

// Pushes the new value into the array, stores in localStorage, and re-renders the UI
function Submit() {
    let newFeature = new FeatureItem(titleInput.value, descrInput.value, categoryInput.value, 0, 0)
    featureList.push(newFeature)
    localStorage.setItem("featureList", JSON.stringify(featureList))
    loadAndRenderFeatures()
    popupToggler()
    clearAllFields()
}

function clearAllFields() {
    titleInput.value = "" 
    descrInput.value = ""
    categoryInput.value = ""
    charCounter.classList.add("hidden")
}

// Dynamic character counter for description field
descrInput.addEventListener("input", () => {
    charLength = descrInput.value.length;

    if (charLength === 0) {
        charCounter.classList.add("hidden")
    }
    else if (charLength > 35) {
        charCounter.style.color = "red"
    }
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

// Voting logic
ulElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("thumb")) {
        const liElement = event.target.closest("li");
        const index = liElement.getAttribute("data-index");
        const feature = featureList[index];
        const isUpvote = event.target.classList.contains("up");
        const isDownvote = event.target.classList.contains("down");
        
        // Determine current vote
        const currentVote = feature.userVote;
        
        // Update vote counts and ensures they only vote for EITHER up or down
        if (isUpvote) {
            if (currentVote === 'down') feature.numDownvotes--;
            if (currentVote !== 'up') {
                feature.numUpvotes++;
                feature.userVote = 'up';
            }
        } else if (isDownvote) {
            if (currentVote === 'up') feature.numUpvotes--;
            if (currentVote !== 'down') {
                feature.numDownvotes++;
                feature.userVote = 'down';
            }
        }
        
        // Save to local storage and update UI
        localStorage.setItem("featureList", JSON.stringify(featureList));
        loadAndRenderFeatures();
    }
});


/* List of work to complete: 

- Add a manual object array using constructor functions [Done]
- Ensure the placeholder ones are using the constructor functions [Done]
- newItem() to add this to the [Done]
- Add key/values to local storage: [Done]
    > Feature Name
    > Description 
    > upvotes: 1
    > downvotes: 1
- upvote() and downvote() [Done]
    > increments the number to localStorage [Done]

- errorHandling() to ensure that if an up AND down is clicked, they behave properly [Done]
- More styling
- Instead of storing in localStorage, store everything in a Firebase db. Then, you can do unAuth voting

*/