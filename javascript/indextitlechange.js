let showingAlert = false;
const title = "Alberto Clocks | Home";
const message = "Home of Watches";

const changetitle = setInterval(() => {
   document.title =
   showingAlert ? title : message;
   showingAlert = !showingAlert;

}, 700);