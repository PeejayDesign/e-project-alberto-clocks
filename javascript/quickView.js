let popup = document.getElementById("popup");

function openPopup(){
popup.classList.add("open-popup");
const productName1 = {
    name: 'Alberto Watch 1',
    description: 'This product was made of leather',
}
document.getElementById("firstProductName").innerHTML = productName1.name;
document.getElementById("firstProductDescription").innerHTML = productName1.description;
}

//function for the second quick view button
function openPopup1 (){
    popup.classList.add("open-popup");
    const productName2 = {
        name: 'Alberto Clock 2',
        description: 'This product was made of silk',
    }
    document.getElementById("firstProductName").innerHTML = productName2.name;
    document.getElementById("firstProductDescription").innerHTML = productName2.description;

}

// Function to remove popup card
function closePopup(){
popup.classList.remove("open-popup");
}