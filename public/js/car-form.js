// Select size
const carSizeInput = document.getElementById("input-size");
const carSizeOptionContainer = document.getElementById("car-size-options");
const carSizeOptions = document.querySelectorAll(".car-size-option");
const sizeOptions = [...carSizeOptions];

carSizeInput.addEventListener("click", () => {
	if (carSizeOptionContainer.classList.contains("d-none")) {
		carSizeOptionContainer.classList.remove("d-none");
		carSizeOptionContainer.classList.add("d-flex");
	} else {
		carSizeOptionContainer.classList.remove("d-flex");
		carSizeOptionContainer.classList.add("d-none");
	}
});

sizeOptions.forEach((driverOption) => {
    driverOption.addEventListener("click", () => {
        carSizeInput.value = driverOption.getAttribute("data-attr");
        carSizeOptionContainer.classList.remove("d-flex");
        carSizeOptionContainer.classList.add("d-none");
    });
});

// Handle input file
const formPlaceholderImage = document.getElementById("input-image-placeholder");
const formInputImage = document.getElementById("input-image");

if (formPlaceholderImage.innerHTML === "https://placeimg.com/640/480/any") {
  formPlaceholderImage.style.color = "#8A8A8A";
} else {
  formPlaceholderImage.style.color = "#3C3C3C";
}

formInputImage.addEventListener("change", () => {
  if (formInputImage.files.length === 1) {
    formPlaceholderImage.innerHTML = formInputImage.files[0].name;
    formPlaceholderImage.style.color = "#3C3C3C";
  }
});