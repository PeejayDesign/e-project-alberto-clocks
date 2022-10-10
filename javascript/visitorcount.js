const count = document.getElementById("count");
var errorMsg;  

// incrementVisitsCount();
const pathName = window.location.pathname;
if (pathName == '/index.html') {
    incrementVisitsCount();
}
else{
    errorMsg = "Count Paused";
    document.getElementById("count").innerHTML = errorMsg;
}

function incrementVisitsCount() {
    let visits;
    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
    else {
        visits = +localStorage.getItem("visits");
        const incrementedCount = visits + 1;

        localStorage.setItem("visits", incrementedCount);
    }
    count.innerText = localStorage.getItem("visits");
}