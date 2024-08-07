// Firebase crap
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, getDoc, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDUcJE1-2a84KGsAPZLvH_6VbzfyUCGo3Y",
    authDomain: "featurecrudapp.firebaseapp.com",
    projectId: "featurecrudapp",
    storageBucket: "featurecrudapp.appspot.com",
    messagingSenderId: "776011644686",
    appId: "1:776011644686:web:13f358784f6d010ecf615f",
    measurementId: "G-M8ZR3ZQ5KG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Real stuff is below
const voterName = document.getElementById("votername")
const fieldsets = document.querySelectorAll('fieldset');
const userName = storeNameInLS();

for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].addEventListener('click', function(event) {
        if (event.target.type === 'radio') {
            const div = fieldsets[i].querySelector('div.hidden');
            if (div) {
                div.classList.remove('hidden');
            }
        }
    });
}

// Handle radio button click event
async function handleRadioClick(event) {
    if (event.target.type === 'radio') {
        const fieldset = event.currentTarget;
        const div = fieldset.querySelector('div.hidden');
        if (div) {
            div.classList.remove('hidden');
        }

        const voteValue = event.target.value;
        const voteCategory = event.target.name;

        await updateVoteInFirestore(userName, voteCategory, voteValue);
        await displayResultsFromFirestore(voteCategory, div);
    }
}

// Update Firestore with user's vote
async function updateVoteInFirestore(userName, voteCategory, voteValue) {
    const docRef = doc(db, "whosAvail", userName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        await updateDoc(docRef, {
            [voteCategory]: voteValue
        });
    } else {
        await setDoc(docRef, {
            [voteCategory]: voteValue
        });
    }
}

// Global Show & Hide Toggle 
// function classChange() {
//     if (resultsForm.classList.contains("hidden")) {
//         resultsForm.classList.remove("hidden")
//     }
//     else {
//         resultsForm.classList.add("hidden")
//     }

//     if (imgToggle.classList.contains("hidden")) {
//         imgToggle.classList.remove("hidden")
//     }
//     else {
//         imgToggle.classList.add("hidden")
//     }
// }

// Store name in LS so that we know "who is voting"
function storeNameInLS() {
    let storedName = localStorage.getItem("username") 
    if (!storedName) {
        const getName = prompt("What is your first name?")
        localStorage.setItem("username", getName)
        storedName = getName
    }
    voterName.innerHTML = `${storedName} is voting`
    return storedName
}

// Pull results from Firestore
async function getDataFromFirestore() {
    const urlParams = new URLSearchParams(window.location.search);
    const path = urlParams.get('eventid');
    
    if (path) {
        const docRef = doc(db, path, "event_details");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById("eventNameDisplay").textContent = `${data.eventName}`;
        } else {
            document.body.innerHTML = "That event wasn't found";
        }
    } else {
        document.body.innerHTML = "Which event are you looking for?";
    }
}

// Display results from Firestore
async function displayResultsFromFirestore(voteCategory, div) {
    const whosAvailDoc = await getDoc(doc(db, "whosAvail"));
    const allVotes = whosAvailDoc.data();
    const categoryVotes = allVotes[voteCategory] || {};

    let resultText = "<br>Others that agree with you:<br>";
    Object.entries(categoryVotes).forEach(([name, vote]) => {
        if (vote === voteCategory) {
            resultText += `${name}<br>`;
        }
    });

    div.innerHTML = resultText;
}

// Run the app
getDataFromFirestore()

