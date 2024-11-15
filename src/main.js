import GolangRegex from '@pintjuk/golang-regex';
import wasmPath from '@pintjuk/golang-regex/goregex.wasm';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async () => {
	const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
	submitButton.display = "none";

	console.log("Initializing GolangRegex...");
    try {
        await GolangRegex.initialize(wasmPath);
		//await sleep(3000);
		submitButton.disabled = false;
		submitButton.display = "block";
    } catch (error) {
        console.error("Failed to initialize GolangRegex:", error.message);
    } finally {
		console.log("done!");
	}
});


document.getElementById("regexForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const pattern = document.getElementById("pattern").value;
    const text = document.getElementById("text").value;

    try {
        const isMatch = GolangRegex.match(pattern, text);
        document.getElementById("result").textContent = isMatch ? "Match found!" : "No match found.";
    } catch (error) {
        document.getElementById("result").textContent = "Error: " + error.message;
    }

    document.getElementById("resultCard").style.display = "block";
});

