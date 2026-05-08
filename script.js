// Listen for typing

searchInput.addEventListener("keyup", () => {

const input = searchInput.value;

if (input === "") {
results.style.display = "none";
results.innerHTML = "";
return;
}

const filteredItems = filterItems(input);

displayResults(filteredItems);

});
