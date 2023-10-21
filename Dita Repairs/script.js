document.addEventListener("DOMContentLoaded", function () {
	const submitButton = document.getElementById("submitButton");

	submitButton.addEventListener("click", function (event) {
		event.preventDefault();

		alert("Thank you for choosing DITA");

		const form = document.querySelector("form");
		form.reset();

	});
});