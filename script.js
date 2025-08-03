document.addEventListener("DOMContentLoaded", () => {
  // 1. Form Selection
  const form = document.getElementById("registration-form");

  // 2. Feedback Division Selection
  const feedbackDiv = document.getElementById("form-feedback");

  // 3. Form Submission and Event Prevention
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // 4. Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // 5. Initialize Validation Variables
    let isValid = true;
    const messages = [];

    // 6. Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // 7. Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must include '@' and '.' characters.");
    }

    // 8. Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // 9. Displaying Feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Form submitted successfully!";
      feedbackDiv.style.color = "#2e8a2e"; // green success
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red error
    }
  });
});
