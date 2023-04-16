const sidebar = document.querySelector(".sidebar"); 
const sidebarButton = document.querySelector(".sidebar-button");
const listCarsContainer = document.querySelector(".list-cars");

sidebarButton.addEventListener("click", () => {
	sidebar.classList.contains("active") 
		? sidebar.classList.remove("active")
		: sidebar.classList.add("active");
});

// Select Car Size
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