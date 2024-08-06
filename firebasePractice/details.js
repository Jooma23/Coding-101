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
        
        
        let btnToggle = document.getElementById("showhide")
        let resultsForm = document.getElementById("results")

        btnToggle.addEventListener("click", classChange)

        function classChange() {
            if (resultsForm.classList.contains("hidden")) {
                resultsForm.classList.remove("hidden")
            }
            else {
                resultsForm.classList.add("hidden")
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
                    document.getElementById("eventNameDisplay").textContent = `Random word typed: ${data.eventName}`;
                    document.getElementById("firstNumberDisplay").textContent = `First number was: ${data.firstNumber}`;
                    document.getElementById("secondNumberDisplay").textContent = `First number was: ${data.secondNumber}`;
                } else {
                    document.body.innerHTML = "That event wasn't found";
                }
            } else {
                document.body.innerHTML = "Which event are you looking for?";
            }
        }
        getDataFromFirestore();