const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");

aboutBtn.addEventListener("click", () => {
    aboutModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    aboutModal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
        aboutModal.classList.add("hidden");
    }
});

document.getElementById("pseudofyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputText = document.getElementById("inputText").value.trim();
    const language = document.getElementById("language").value;

    if (!inputText) {
        showNotification("Please enter the source code or problem statement!", "error");
        return;
    }

    const resultDiv = document.getElementById("result");
    const output = document.getElementById("output");
    const loading = document.getElementById("loading");

    resultDiv.classList.add("hidden");
    output.textContent = "";

    loading.classList.remove("hidden");

    try {
        const csrfToken = getCookie('csrftoken');
        const response = await fetch("api/v1/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken
            },
            body: JSON.stringify({ text: inputText, language })
        });
        const data = await response.json();

        loading.classList.add("hidden");

        if (data.status === "success") {
            resultDiv.classList.remove("hidden");
            output.textContent = data.text;
            showNotification("Pseudocode generated successfully!", "success");
        } else {
            showNotification(data.text, "error");
        }
    } catch (error) {
        loading.classList.add("hidden");
        showNotification("Error generating pseudocode. Please try again!", "error");
    }
});

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

function showNotification(message, type = "success") {
    const notification = document.getElementById("notification");

    notification.className = `fixed top-4 right-4 px-4 py-2 rounded-lg text-white text-sm shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
    }`;

    notification.textContent = message;

    notification.classList.remove("hidden");

    setTimeout(() => {
        notification.classList.add("hidden");
    }, 5000);
}

document.getElementById("copyBtn").addEventListener("click", () => {
    const output = document.getElementById("output").textContent;

    if (!output) {
        showNotification("No output available to copy!", "error");
        return;
    }

    navigator.clipboard.writeText(output)
        .then(() => {
            showNotification("Output copied to clipboard!", "success");
        })
        .catch(() => {
            showNotification("Error copying output to clipboard!", "error");
        });
});