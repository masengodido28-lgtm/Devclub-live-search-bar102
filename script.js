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
}