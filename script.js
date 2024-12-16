document.addEventListener("DOMContentLoaded", () => {
    const notesContainer = document.querySelector(".notes_container");
    const createBtn = document.querySelector(".btn");

    // Check if both elements exist to avoid runtime errors
    if (!notesContainer) {
        console.error("Error: .notes_container element not found in the DOM.");
        return;
    }

    if (!createBtn) {
        console.error("Error: .btn element not found in the DOM.");
        return;
    }

    // Add event listener for creating notes
    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");

        // Set class and attributes
        inputBox.className = "input_box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "https://cdn-icons-png.flaticon.com/128/18551/18551790.png";
        img.alt = "Delete note icon"; // Accessibility improvement

        // Append elements to the container
        notesContainer.appendChild(inputBox).appendChild(img);
    });

    // Add event listener for deleting notes
    notesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
        }
    });
});
