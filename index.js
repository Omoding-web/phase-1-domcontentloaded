// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    //Targeting the paragraph element with id="text" and replacing it
    const textParagraph = document.getElementById("text");
    textParagraph.textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is trigger"
);

//When the DOM content is loaded, the text changes