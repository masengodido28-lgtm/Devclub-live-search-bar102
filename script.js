// Data to search from

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


// Listen for typing

searchInput.addEventListener("keyup", () => {

  // Get what user typed
  const input = searchInput.value.toLowerCase();

  // Clear old results
  results.innerHTML = "";

  // If input is empty
  if(input === ""){
    results.style.display = "none";
    return;
  }

  // Filter matching items

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(input)
  );

  // Show results box
  results.style.display = "block";

  // If no match found

  if(filteredItems.length === 0){

    results.innerHTML = `
      <div class="no-result">
        No results found
      </div>
    `;
  }

  // Show matching items

  filteredItems.forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    // Click result to fill input

    li.addEventListener("click", () => {

      searchInput.value = item;

      results.style.display = "none";

    });

    results.appendChild(li);

  });

});
