 Internship Portal Web Application

This is a simple Internship Portal Web Project*built using HTML, CSS, and JavaScript. It includes a sticky top banner and a collapsible sidebar navigation menu to simulate a basic internship application interface.

---

 📁 Project Structure
InternshipPortal
├── index.html # Main HTML file
├── style.css # Styling for layout and design
└── script.js # Sidebar toggle functionality


🚀 Features

- Sticky top banner for notifications (e.g., "Apply for Internship")
- Responsive sidebar navigation menu
- Centralized main content section
- Clean and modern UI using pure HTML/CSS
- Scrollable page for demo layout testing

 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

 
Sidebar Toggle Function
The sidebar can be toggled open/closed by clicking the ☰ (hamburger) button.

// script.js
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

Author

BAVANI SRI M| SIMATS UNIVERSITY 
INTERN

License
This project is licensed under the MIT License – feel free to use and modify for learning or practice.
