// HTML INTERACTION PRACTICE


// Code Evaluation
document.getElementById("code").addEventListener("change", update);

function update() {
    let code = document.getElementById("code").value;
    eval(code);
}

// Generate Challenge
document.getElementById("generate-challenge").addEventListener("click", generateChallenge);

function generateChallenge() {
    let allIds = ["main-heading", "sub-heading1", "para1", "link1", "list", "li1", "li2", "li3", "img1", "sub-heading2", "para2", "span1"];
    let textIds = ["main-heading", "sub-heading1", "para1", "link1", "li1", "li2", "li3", "sub-heading2", "para2", "span1"];
    let hrefs = ["https://www.google.ca/", "http://harryainlay.epsb.ca/", "https://www.epl.ca/", "http://www.learnalberta.ca/", "https://www.edmonton.ca/"];
    let animals = ["ant", "bee", "cat", "dog", "elephant", "fish", "giraffe", "horse", "iguana", "jelly-fish", "kangaroo", "llama", "monkey", "nightingale", "ostrich"];
    let colors = ["orange", "red", "maroon", "fuchsia", "purple", "blue", "cyan", "green", "goldenrod", "magenta", "olive", "tomato"];
    let fonts = ["Georgia", "Courier New", "Comic Sans MS", "Impact", "Papyrus"];

    let taskEl = document.getElementById("task");

    // Generate Random Challenge Type: 1 - 7
    let randType = Math.randomInt(1, 8);
    if (randType == 1) {
        // Text Content
        let id = Math.randomElement(textIds);
        let animal = Math.randomElement(animals);
        taskEl.innerHTML = "Set content of element with id '" + id + "' to '" + animal + "'.";
    } else if (randType == 2) {
        // Image Src
        let imgNum = Math.randomInt(1, 5);
        taskEl.innerHTML = "Set image source to 'images/lorem-ipsum" + imgNum + ".jpg'.";
    } else if (randType == 3) {
        // Link href
        let href = Math.randomElement(hrefs);
        taskEl.innerHTML = "Set link href to '" + href + "'.";
    } else if (randType == 4) {
        // Font color of text element
        let id = Math.randomElement(textIds);
        let color = Math.randomElement(colors);
        taskEl.innerHTML = "Set font color of element with id '" + id + "' to '" + color + "'.";
    } else if (randType == 5) {
        // Font family of text element
        let id = Math.randomElement(textIds);
        let font = Math.randomElement(fonts);
        taskEl.innerHTML = "Set font family of element with id '" + id + "' to '" + font + "'.";
    } else if (randType == 6) {
        // Font size of text element
        let id = Math.randomElement(textIds);
        let size = Math.randomInt(24, 40);
        taskEl.innerHTML = "Set font size of element with id '" + id + "' to '" + size + "px'.";
    } else if (randType == 7) {
        // Border of any element
        let id = Math.randomElement(allIds);
        let size = Math.randomInt(1, 6);
        let color = Math.randomElement(colors);
        taskEl.innerHTML = "Set border of element with id '" + id + "' to '" + size + "px solid " + color + "'.";
    }
}

