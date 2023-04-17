const sidebar = document.querySelector(".sidebar"); 
const sidebarButton = document.querySelector(".sidebar-button");
const listCarsContainer = document.querySelector(".list-cars");

sidebarButton.addEventListener("click", () => {
	sidebar.classList.contains("active") 
		? sidebar.classList.remove("active")
		: sidebar.classList.add("active");
});

const closeNotification = () => {
	const notificationContainer = document.querySelector(".list-cars__notification")
	notificationContainer.remove();
}

const setFormAction = () => {
	const cardDeleteButton = document.querySelector(".list-card__card-delete");
	const modalDeleteForm = document.getElementById("modal-delete-form");
	const dataId = cardDeleteButton.getAttribute("data-attr");
	modalDeleteForm.setAttribute("action", `/cars/delete/${dataId}`);
}