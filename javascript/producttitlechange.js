let showingAlert = false;
const title = "Alberto Clocks | Products";
const message = "Welcome To Alberto Clocks";

const changetitle = setInterval(() => {
	document.title = showingAlert ? title : message;
	showingAlert = !showingAlert;
}, 700);
