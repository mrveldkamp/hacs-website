// Main Content JS
// Use to update main content based on user contents menu selection

// Load File on Content Menu Selection
let linkEls = document.querySelectorAll(".contents a");
for (let element of linkEls) {
    element.addEventListener("click", loadContents);
}

// Event Function
function loadContents() {
    // Display clicked file
    displayFile(this.dataset["path"] + ".html");

    // Update active class
    let liEls = document.querySelectorAll(".contents li");
    for (let element of liEls) {
        element.classList.remove("active-li");
    }

    this.parentElement.classList.add("active-li");
}

// Helper Function to fetch and display file
function displayFile(fileName) {
    fetch(fileName)
        .then((response) => response.text())
        .then((data) => {
            document.querySelector(".main-content").innerHTML = data;
            setEventListeners();
            Prism.highlightAll();
        })
}

// Set Event Listeners once file loaded...
function setEventListeners() {
    // Switch Tabs on Click
    let tabEls = document.querySelectorAll(".tabbed-menu div");
    for (let element of tabEls) {
        element.addEventListener("click", switchTab);
    }

    function switchTab() {
        // Update active class
        for (let element of tabEls) {
            element.classList.remove("active-tab");
        }
        this.classList.add("active-tab");

        // Display Appropriate Content
        if (this.innerHTML == "Concept Notes") {
            document.querySelector(".concept-notes").style.display = "block";
            document.querySelector(".video-lessons").style.display = "none";
            document.querySelector(".assignments").style.display = "none";
        } else if (this.innerHTML == "Video Lessons") {
            document.querySelector(".concept-notes").style.display = "none";
            document.querySelector(".video-lessons").style.display = "block";
            document.querySelector(".assignments").style.display = "none";
        } else {
            document.querySelector(".concept-notes").style.display = "none";
            document.querySelector(".video-lessons").style.display = "none";
            document.querySelector(".assignments").style.display = "block";
        }


    }
}