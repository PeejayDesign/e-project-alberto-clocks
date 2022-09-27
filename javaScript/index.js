let http = new XMLHttpRequest();
http.open('get', 'database/product.json', true);
http.send();
 let product = JSON.parse(this.Response);
 let output = "";
 let output1 = "";
 for(let item of product){
    output1 = output + "<div class = 'product'> <img src = '${item.image}' alt = '${item.image}'> <p class = 'title'>${item.title}</p> <p class = 'description'>${item.description}</p> <p class = 'price'><span>${item.price}</span></p> </div>";
    document.getElementById(".Products").innerHTML = output1;
 }