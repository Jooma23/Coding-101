import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
        import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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
        
        let btnToggle = document.getElementById("showhideBtn")
        let resultsForm = document.getElementById("results")
        let imgToggle = document.getElementById("showhideImg")        

        btnToggle.addEventListener("click", classChange)

        function classChange() {
            if (resultsForm.classList.contains("hidden")) {
                resultsForm.classList.remove("hidden")
            }
            else {
                resultsForm.classList.add("hidden")
            }

            if (imgToggle.classList.contains("hidden")) {
                imgToggle.classList.remove("hidden")
            }
            else {
                imgToggle.classList.add("hidden")
            }
        }

        // Show the results
        async function getDataFromFirestore() {
            const urlParams = new URLSearchParams(window.location.search);
            const path = urlParams.get('path');
            
            if (path) {
                const docRef = doc(db, path, "event_details");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    document.getElementById("eventNameDisplay").textContent = `Event was called: ${data.eventName}`;
                    document.getElementById("firstNumberDisplay").textContent = `Earliest start date was: ${data.firstNumber}`;
                    document.getElementById("secondNumberDisplay").textContent = `Latest start date was: ${data.secondNumber}`;
                } else {
                    document.body.innerHTML = "That event wasn't found";
                }
            } else {
                document.body.innerHTML = "Which event are you looking for?";
            }
        }
        getDataFromFirestore();