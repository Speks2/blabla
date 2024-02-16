// globals
const myFeaturedElement = document.getElementById('featuredProducts');
//console.log(myFeaturedElement);
const navElement = document.getElementById('navigation')

let myProducts = null


// page load
GetProductData()
GetCategoryData()


// model
function GetProductData() {
    fetch('https://dummyjson.com/products?limit=100')

        .then((result) => {
            // console.log(result)
            return result.json();
        })
        .then((json) => {

            ProductsRecived(json);

        });
}

function GetCategoryData() {
    fetch('https://dummyjson.com/products/categories')

        .then((result) => {
            // console.log(result)
            return result.json();
        })
        .then((json) => {

            ReciveCategoryData(json);

        });
}


// controller
function ProductsRecived(productData) {

    // console.log(productData)

    myProducts = productData.products

    let myFeaturedProducts = [];

    myFeaturedProducts.push(myProducts[13], myProducts[30], myProducts[20])
    // console.log(myFeaturedProducts);

    // CreateProductView(myFeaturedProducts)
    CreateProductView(myProducts);
}
// _____________________________________________________________
function ReciveCategoryData(myCategories) {

    //  console.log(myCategories);

 CreateNavBar(myCategories);

}

function NavCallBack(myCategory) {

    if (myCategory = "all") {
        CreateProductView(myProducts);

    }else {
        // console.log(myCategory);
   
    let mySelectedProducts = []
    
    myProducts.forEach(product =>{

    if (myCategory == product.category) {
             
    //    console.log(product);
       mySelectedProducts.push(product)
    }

    });
    // console.log(mySelectedProducts)
    CreateProductView(mySelectedProducts)
    }
   
    
    // _____________________________________________________________
}




// ________________________________________________________________


// view code

function CreateNavBar(myCategories) {
// navElement
  let myHTML = `<button onlick="NavCallBack"('All')">All</button>`
 
//  console.log(myCategories);
  myCategories.forEach(element => {
    // console.log(element);
     myHTML += `<button onclick="NavCallBack('${element}')">${element}</button>`



    
 });


   navElement.innerHTML=myHTML


}




// ______________________________________________________
function CreateProductView(myCards) {
    // console.log(myCards);
    // clearApp{}

    myCards.forEach(product => {
        // console.log(product);


        let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`


        myFeaturedElement.innerHTML += myHTML
    });
}

function ProductCallback(myId) {
    // console.log(myId);
    let myClickedProduct = null;
    myProducts.forEach(product => {
        if (product.id == myId) {
            myClickedProduct = product;
        }
    }
    )
    // console.log(myClickedProduct);
    clearApp();
    buildProduct(myClickedProduct)
}

function buildProduct(product) {

    let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price}</h3></figure>`


    myFeaturedElement.innerHTML = myHTML
}


function clearApp() {

}

// POPUP
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('welcomePopup');

    // Show the popup after a delay (e.g., 2 seconds)
    setTimeout(function() {
        popup.style.display = 'block';
    }, 500);
});

function closePopup() {
    const popup = document.getElementById('welcomePopup');
    popup.style.display = 'none';
}



































































// // GetCategoryData()
// // DisplayLoadingScreen()

// function hentData(apiEndpoint) {
//     // Brug Fetch API til at hente data fra det angivne API-endpunkt
//     fetch(apiEndpoint)
//       .then(response => {
//         // Tjek om forespørgslen var succesfuld (statuskode 200)
//         if (response.ok) {
//           // Returner JSON-data fra responsen
//           return response.json();
//         } else {
//           // Hvis forespørgslen ikke var succesfuld, kast en fejl
//           throw new Error('Der opstod en fejl under hentning af data');
//         }
//       })
//       .then(data => {
//         // Gør noget med den hentede data, f.eks. log den til konsollen
//         console.log('Hentede data:', data);
//       })
//       .catch(error => {
//         // Håndter fejl, hvis der opstår problemer under hentning af data
//         console.error('Fejl under hentning af data:', error.message);
//       });
//   }
  
//   // Eksempel: Kald funktionen med et API-endpunkt
//   hentData('https://dog.ceo/api/breeds/image/random'); 
//   hentData('https://dog.ceo/api/breeds/list/all'); 
//   hentData('https://dog.ceo/api/breed/hound/images'); 
//   hentData('https://dog.ceo/api/breed/hound/list'); 


  
  
  