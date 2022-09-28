let products = {
    data: [
      {
        productName: "GMT-MASTER II",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "AIR-KING",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "DATEJUST 36",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "YACHT-MASTER 42",
        category: "luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "SUBMARINER",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "EXPLORER",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "SKY-DWELLER",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "SEA-DWELLER",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "MILGAUSS",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "MICHEAL KORS",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "GOLD TONE WATCH",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "LENUX TWO-TONED WATCH",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "RED TONE SILICON",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "PAVE SILVER-TONED WATCH",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "CAMILLE GOLD-TONE WATCH",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "HUTTON TWO-TONE WATCH",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "APPLE WATCH ULTRA",
        category: "Smart watches",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "APPLE WATCH SERIES 8",
        category: "Smart watches",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "APPLE WATCH SE",
        category: "Smart watches",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "APPLE WATCH HERMES",
        category: "Smart watches",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "GALAXY WATCH 5",
        category: "Smart watches",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "SAMSUNG GALAXY WATCH ACTIVE 2",
        category: "Smart watches",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "SAMSUNG ULTRA SERIE ",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "SAMSUNG ULTRA 12",
        category: "Luxury",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "IPS SCREEN 168",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/Asset/alberto1.png",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "₦" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };