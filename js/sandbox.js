document.getElementById("madlib-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input values
    const adjective = document.getElementById("adjective").value;
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adverb = document.getElementById("adverb").value;

    // Create the Mad Lib story
    const story = `Once upon a time, a very ${adjective} ${noun} ${verb} ${adverb} through the forest. Everyone was amazed at its ${adjective} journey!`;

    // Display the story
    document.getElementById("story-text").innerText = story;

    // Hide the form and show the story
    document.getElementById("madlib-form").classList.add("hidden");
    document.getElementById("story").classList.remove("hidden");
});

// Reset the form and story when "Play Again" button is clicked
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("madlib-form").reset();
    document.getElementById("madlib-form").classList.remove("hidden");
    document.getElementById("story").classList.add("hidden");
});
