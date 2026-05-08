const items = [
  "HTML Tutorial",
  "CSS Responsive Design",
  "JavaScript Basics",
  "Frontend Projects",
  "React Tutorial",
  "Live Search Bar",
  "Web Development",
  "Responsive Navbar",
  "Portfolio Website",
  "CSS Animations"
];

// Get HTML elements

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
// Data to search from

function filterItems(input) {
return items.filter(item =>
item.toLowerCase().includes(input.toLowerCase())
);
}

// Function to display results

function displayResults(filteredItems) {

results.innerHTML = "";

results.style.display = "block";

if (filteredItems.length === 0) {
results.innerHTML = `
<div class="no-result">
No results found
</div>
`;
return;
}

filteredItems.forEach(item => {

const li = document.createElement("li");

li.textContent = item;

li.addEventListener("click", () => {
searchInput.value = item;
results.style.display = "none";
});

results.appendChild(li);
});