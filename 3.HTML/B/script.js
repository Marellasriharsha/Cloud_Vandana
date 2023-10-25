function submitForm() {
    // Get form data
    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const firstTime = document.querySelector('input[name="firstTime"]:checked').value;
    const suggest = document.querySelector('input[name="suggest"]:checked').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const suggestions = document.getElementById("suggestions").value;

    // Display the data in a pop-up
    const popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>First Time Using Products:</strong> ${firstTime}</p>
        <p><strong>Would You Suggest to Your Friends:</strong> ${suggest}</p>
        <p><strong>How Satisfied with Company:</strong> ${satisfaction}</p>
        <p><strong>Suggestions for Improvement:</strong> ${suggestions}</p>
    `;

    // Show the pop-up
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}
