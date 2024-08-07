// Firebase crap
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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
let btnAction = document.querySelector("button")
btnAction.addEventListener("click", submitToFS)

// Generate a random 5 char filepath for the Collection Name
function randomFilepath() {
    let filepathName = Math.floor(Math.random() * 1000)
    return filepathName
}

// Add 1 Collection, 2 Documents, and some fields
async function submitToFS() {
    const eventName = document.getElementById("eventName").value
    const collectionPath = randomFilepath().toString()

    // Add 1st Document (event_details)
    await setDoc(doc(db, collectionPath, "event_details"), {
            eventName: eventName,
        });

    // Add 2nd Document (whosAvail, but empty)
    await setDoc(doc(db, collectionPath, "whosAvail"), {});
    
    // Generate and display the new URL
    const baseUrl = window.location.origin
    const newUrl = `${baseUrl}/firebasePractice/details.html?ThisIsForMyOwnPracticeDoNotShare?eventid=${collectionPath}`
    document.getElementById("linkUrl").innerHTML = `Here's your link to share:<br> <a href="${newUrl}" target="_blank">${newUrl}</a>`
}