// // FIREBASE STUFF//

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "willaddlater",
//   authDomain: "featurecrudapp.firebaseapp.com",
//   projectId: "featurecrudapp",
//   storageBucket: "featurecrudapp.appspot.com",
//   messagingSenderId: "776011644686",
//   appId: "1:776011644686:web:a7a55b28bb7421a9cf615f",
//   measurementId: "G-L1SLDPHZSH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// App Stuff //
const postBtn = document.getElementById("post-btn")
const titleInput = document.getElementById("title")
const descrInput = document.getElementById("desc")
const categoryInput = document.getElementById("category") 
const btnToggler = document.querySelector(".topbox")
const ulElement = document.querySelector("ul")
let charCounter = document.getElementById("charCount")
let featureList = []

// Create an object for a New Items
function FeatureItem (name, description, theme, numUpvotes, numDownvotes, userVote) {
    this.name = name
    this.description = description
    this.theme = theme
    this.numUpvotes = numUpvotes
    this.numDownvotes = numDownvotes
    this.userVote = userVote
}

// Load the application & render features from local storage
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

// Pushes new values into the array, stores in localStorage, and (prob inefficiently) re-renders the whole UI
function Submit() {
    let newFeature = new FeatureItem(titleInput.value, descrInput.value, categoryInput.value, 0, 0)
    featureList.push(newFeature)
    localStorage.setItem("featureList", JSON.stringify(featureList))
    loadAndRenderFeatures()
    popupToggler()
    clearAllFields()
}

// Voting logic to ensure they can only press up OR down
ulElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("thumb")) {
        const liElement = event.target.closest("li");
        const index = liElement.getAttribute("data-index");
        const feature = featureList[index];
        const isUpvote = event.target.classList.contains("up");
        const isDownvote = event.target.classList.contains("down");
        const currentVote = feature.userVote;
        
        // Update vote counts, ensures only voting EITHER up or down, and increments/decrements accordingly
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
        
        localStorage.setItem("featureList", JSON.stringify(featureList));
        loadAndRenderFeatures();
    }
});

// EXTRA UX/UI stuff //

// Clear the fields after submission
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

// Hide/Unhide a New Request Feature
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


/*

Remaining Work
- Instead of storing in localStorage, store everything in a Firebase db. Then, you can do unAuth voting
- Step for firebase: 
1. Set up new FB project
2. Initialize it in js
3. Create async CRUD fns for it
4. Integrate those async fn's in the app, where needed
- Styling

*/