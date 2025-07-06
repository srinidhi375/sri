// Get reference to the container
const userContainer = document.getElementById("user-container");

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    // Clear the "Loading..." text
    userContainer.innerHTML = "";

    // Loop through user data and display each user
    data.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
        <strong>${user.name}</strong><br>
        📧 Email: ${user.email}<br>
        🌍 City: ${user.address.city}
      `;
      userContainer.appendChild(userDiv);
    });
  })
  .catch(error => {
    userContainer.innerHTML = "Failed to load data.";
    console.error("Error fetching data:", error);
  });
