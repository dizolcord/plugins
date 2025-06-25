export default {
    name: "DiscMEMZ",
    description: "Adds a 🗿 button to activate MEMZ chaos.",
    authors: [{ name: "Devcord" }],

    start() {
        // Create the button to activate MEMZ chaos
        const chaosButton = document.createElement("button");
        chaosButton.innerText = "🗿 ACTIVATE MEMZ";
        chaosButton.style.position = "absolute";
        chaosButton.style.top = "20px";
        chaosButton.style.right = "20px";
        chaosButton.style.padding = "8px 12px";
        chaosButton.style.background = "red";
        chaosButton.style.color = "white";
        chaosButton.style.border = "none";
        chaosButton.style.borderRadius = "5px";
        chaosButton.style.cursor = "pointer";
        chaosButton.style.zIndex = "1000";
        document.body.appendChild(chaosButton);

        // Load MEMZ library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@skwalexe/memz@0.1.0/dist/memz.umd.js';
        document.body.appendChild(script);

        // Wait until the script is loaded
        script.onload = () => {
            // Now the 'Memz' object should be available
            const mmz = new Memz('https://cdn.jsdelivr.net/gh/SkwalExe/Memz.js@0.1.0/src/assets/');
            
            // Button click event to activate MEMZ chaos
            chaosButton.onclick = () => {
                // Check if the 'mmz' object is instantiated properly and call the 'all()' method
                if (mmz) {
                    mmz.all(); // Activate MEMZ chaos
                } else {
                    console.error("Memz object not instantiated.");
                }
            };
        };
    },

    stop() {
        // Remove the MEMZ button when the plugin stops
        document.querySelectorAll("button").forEach(button => {
            if (button.innerText === "💀 ACTIVATE MEMZ") {
                button.remove();
            }
        });

        // Optionally, clean up any active effects if necessary.
        // For example, you can call `mmz.stopEffects()` if such a method exists in the Memz class.
    }
};
