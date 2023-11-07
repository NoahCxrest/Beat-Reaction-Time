const robot = require("robotjs");

// Define the coordinates (x, y) of the pixel you want to check
const x = 1045;
const y = 365;

// Define the target color as a hexadecimal string
const targetColor = "77d877";

// Function to continuously check the pixel color and click when a match is found
const checkAndClickPixel = () => {
    while (true) {
        // Capture the screen color at the specified coordinates
        const color = robot.getPixelColor(x, y);

        // Check if the pixel color matches the target color
        if (color === targetColor) {
            console.log(`Pixel color matches at (${x}, ${y}).`);
            // Simulate a mouse click at the same coordinates
            robot.moveMouse(x, y);
            robot.mouseClick();
        }
    }
}

// Start the pixel color checking process
checkAndClickPixel();

// Creator of this script is "finalcutpro" (Discord)
