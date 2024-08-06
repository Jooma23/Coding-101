// Firebase crap
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getFirestore, collection, getDoc, doc, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Real stuff is below
let btnAction = document.querySelector("button")
btnAction.addEventListener("click", submitToFS)

// Generate a random 5 char filepath for the Collection Name
function randomFilepath() {
    let filepathName = Math.floor(Math.random() * 1000000)
    return filepathName
}

// Add Collection, 2 Documents, and some fields
async function submitToFS() {
    const eventName = document.getElementById("eventName").value
    const firstNumber = document.getElementById("first").value
    const secondNumber = document.getElementById("second").value
    const collectionPath = randomFilepath().toString()

    // Add 1st Document (event_details)
    await setDoc(doc(db, collectionPath, "event_details"), {
            eventName: eventName,
            firstNumber: firstNumber,
            secondNumber: secondNumber,
        });

    // Add 2nd Document (whosAvail, but empty)
    await setDoc(doc(db, collectionPath, "whosAvail"), {});
    
    // Generate and display the new URL
    const baseUrl = window.location.origin
    const newUrl = `${baseUrl}/firebasePractice/details.html?path=${collectionPath}`
    document.getElementById("linkUrl").innerHTML = `Here's your link:<br> <a href="${newUrl}" target="_blank">${newUrl}</a>`
}