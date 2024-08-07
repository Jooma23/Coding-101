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
const voterName = document.getElementById("votername");
const fieldsets = document.querySelectorAll('fieldset');
const userName = storeNameInLS();
const urlParams = new URLSearchParams(window.location.search);
const path = urlParams.get('eventid');

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

// Handle radio button click event
for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].addEventListener('click', handleRadioClick)
}
async function handleRadioClick(event) {
    if (event.target.type === 'radio') {
        const fieldset = event.currentTarget;
        const div = fieldset.querySelector('div.hidden');
        if (div) {
            div.classList.remove('hidden');
        }
        const voteValue = event.target.value;
        const categoryName = event.target.name; // Get category name from the radio button
        await updateVoteInFirestore(userName, categoryName, voteValue);
        await displayResultsFromFirestore(voteValue, div, categoryName);
    }
}

async function updateVoteInFirestore(userName, categoryName, newVoteValue) {
    const docRef = doc(db, path, "whosAvail");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const userVotes = data[userName] || {};  // Get existing votes or initialize empty object
        const categoryVotes = userVotes[categoryName] || []; // Get votes for the category

        // Replace existing vote or add new one
        const updatedVotes = categoryVotes.map(vote => vote === newVoteValue ? newVoteValue : vote);

        if (!updatedVotes.includes(newVoteValue)) {
            updatedVotes.push(newVoteValue);  // Add new vote if it’s not already present
        }

        userVotes[categoryName] = updatedVotes;

        await updateDoc(docRef, {
            [userName]: userVotes  // Update the document with the new votes object
        });
    } else {
        await setDoc(docRef, {
            [userName]: {
                [categoryName]: [newVoteValue]  // Create new document with the initial vote
            }
        });
    }
}


// Pull event name from Firestore
async function getDataFromFirestore() {   
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
async function displayResultsFromFirestore(voteValue, div, categoryName) {
    const docRef = doc(db, path, "whosAvail");
    const whosAvailDoc = await getDoc(docRef);
    const allVotes = whosAvailDoc.data();
    const categoryVotes = {};

    if (!whosAvailDoc.exists()) {
        return;
    }

    Object.entries(allVotes).forEach(([name, votes]) => {
        if (votes[categoryName] && votes[categoryName].includes(voteValue)) {
            categoryVotes[name] = votes[categoryName];
        }
    });

    let resultText = "<br>Others that agree with you:<br>";
    Object.entries(categoryVotes).forEach(([name, votes]) => {
        if (votes.includes(voteValue)) {
            resultText += `${name}<br>`;
        }
    });

    div.innerHTML = resultText;
}


// Run the app
getDataFromFirestore()

