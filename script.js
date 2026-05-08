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