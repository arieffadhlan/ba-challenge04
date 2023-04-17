const sidebar = document.querySelector(".sidebar"); 
const sidebarButton = document.querySelector(".sidebar-button");
const listCarsContainer = document.querySelector(".list-cars");

sidebarButton.addEventListener("click", () => {
	sidebar.classList.contains("active") 
		? sidebar.classList.remove("active")
		: sidebar.classList.add("active");
});