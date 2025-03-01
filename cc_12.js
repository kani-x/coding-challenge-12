// Task 1 - Created Revenue Metric Card

// Select the dashboard container
const dashboard = document.getElementById("dashboard");

// Create a revenue metric card
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

// Append to dashboard
dashboard.appendChild(revenueCard);

// "Task 2 - Updated Metric Cards via Array Conversion"

// Select all metric cards and convert NodeList to an array
const metricCards = Array.from(document.querySelectorAll(".metric-card"));

// Update each metric card's text
metricCards.forEach(card => {
    card.innerHTML += " - Updated";
    card.style.backgroundColor = "#f0f0f0";
});
