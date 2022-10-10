let showingAlert = false;
const title = "Alberto Clocks | Support";
const message = "Welcome To Alberto Clocks";

const changetitle = setInterval(() => {
	document.title = showingAlert ? title : message;
	showingAlert = !showingAlert;
}, 700);
