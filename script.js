document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get and trim inputs
    const { username, email, password } = getTrimmedInputs();

    // Validate inputs
    const { isValid, messages } = validateInputs(username, email, password);

    // Display feedback
    displayFeedback(isValid, messages);
  });

  // Function to retrieve and trim input values
  function getTrimmedInputs() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    return { username, email, password };
  }

  // Function to validate inputs and return validation status and messages
  function validateInputs(username, email, password) {
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must include '@' and '.' characters.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    return { isValid, messages };
  }

  // Function to display feedback in the feedbackDiv
  function displayFeedback(isValid, messages) {
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#2e8a2e"; // success green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // error red
    }
  }
});
