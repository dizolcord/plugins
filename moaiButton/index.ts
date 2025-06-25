export default {
    name: "MoaiButton",
    description: "Adds a 🗿 button next to usernames in chat.",
    authors: [{ name: "Devcord" }],

    start() {
        // Load the Vine Boom sound from the provided URL
        const vineBoomSound = new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3");

        this.addButtonsToMessages = () => {
            document.querySelectorAll("h3").forEach(username => {
                const messageContainer = username.closest("li");

                if (messageContainer && !messageContainer.dataset.buttonAdded) {
                    // Create the 🗿 button
                    const button = document.createElement("button");
                    button.innerText = "🗿";
                    button.className = "user-id-button";
                    button.style.background = "none";
                    button.style.border = "none";
                    button.style.cursor = "pointer";
                    button.style.fontSize = "16px";
                    button.style.marginLeft = "5px";

                    // Button click event to play Vine Boom sound
                    button.onclick = () => {
                        vineBoomSound.play(); // Play the Vine Boom sound
                        alert(`🗿🗿🗿 Moai 🗿🗿🗿`);
                    };

                    // Append button next to the username
                    username.appendChild(button);
                    messageContainer.dataset.buttonAdded = "true"; // Mark as processed
                }
            });
        };

        // Run every 2 seconds to handle new messages
        this.interval = setInterval(this.addButtonsToMessages, 2000);
    },

    stop() {
        if (this.interval) clearInterval(this.interval);
        document.querySelectorAll(".user-id-button").forEach(button => button.remove());
    }
};
