
let darkmode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
	document.documentElement.setAttribute("data-bs-theme", "dark");
	darkmode = "active";
	localStorage.setItem("darkmode", darkmode);
}

const disableDarkMode = () => {
	document.documentElement.setAttribute("data-bs-theme", "light");
	darkmode = null;
	localStorage.setItem("darkmode", darkmode);
}

function toggleDarkMode() {
	darkmode !== "active" ? enableDarkMode() : disableDarkMode();
}

if (darkmode == null) darkmode = "active";
darkmode === "active" ? enableDarkMode() : disableDarkMode();