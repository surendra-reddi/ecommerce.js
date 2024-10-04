// let product=[];
// const link="https://fakestoreapi.com/products";

// async function apiHandler(){
//   fetch(link).then(res=>res.json())
//   .then(data=>{
//     handler(data)
//     product=data
//     // console.log(data);
    
// })
// }
// apiHandler()
// console.log(product)

// const ulele=document.querySelector('#row');

// function handler(card){
//   // console.log(card);


// ulele.innerHTML=''
// card.forEach((items)=>{
//   truncTitle(items.title)
//   trunc(items.description)
//   ulele.innerHTML +=` <div class="col"><div class="card mb-5 ms-2s"  style="width: 18rem;">
//              <img src="${items.image}" class="card-img-top ms-5 mt-2 " style="height:200px; width:200px;  " alt="...">
//              <div class="card-body">
//                <h5 class="card-title text-center">${tit}</h5>
//                <p class="card-text text-center px-2 fw-normal">${disc}</p>
//              </div>
//               <ul class="list-group list-group-flush">

//                <li class="list-group-item text-center fs-5  fw-light">$${items.price}</li>
//              </ul>
//              <div class="card-body">
//                <button type="button" class="btn btn-dark ms-4"></i> Details</button>
//                <button type="button" class="btn btn-dark ms-2"></i> Add to cart</button>
//              </div>
//           </div></div>`
//           // ulele.insertAdjacentHTML('beforeend',info)
// })
// }

// let tit;
// function truncTitle(title){


//   if(title.length>12){
//     tit=title.slice(0,12)+"..."
//   }
// }
// let disc;
// function trunc(description){
//   if(description.length>70){
//     disc=description.slice(0,70)+"..."
//     console.log(disc);
//   }
// }
// function add(category){
//   if(category=='all'){
//     handler(product);
// }else{
//   let filterProduct=product.filter(items=>items.category===category)
//   handler(filterProduct)
// }
// }





let product =[];
const API="https://fakestoreapi.com/products";


async function apiHandler() {
  fetch(API).then(res=>res.json()).then ((data)=>{
    // console.log(data);
    product=data
    handler(data)
  }
)


}
apiHandler() //////////function call
console.log(product);



 const ulElem=document.querySelector('#row'); 


 let sum=0;
 let count=0;
 let cart={};

 if(localStorage.getItem('sum')){
  sum=parseInt(localStorage.getItem('sum'));
 }
 if(localStorage.getItem('count')){
  count=parseInt(localStorage.getItem('count'));
 }
 if(localStorage.getItem('cart')){
  cart=JSON.parse(localStorage.getItem('cart'));
 }

 updatecart();
 
function handler(card){
// console.log(card)

ulElem.innerHTML=''
card.forEach((items)=>{
  truncTitle(items.title)
  // console.log(items.title);
  
  trunc(items.description)
  ulElem.innerHTML+=`<div class="col"><div class="card mb-5 " style="width: 18rem;">
            <img src="${items.image}" class="card-img-top ms-5 mt-2 " style="height:200px; width:200px;  " alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${tit}</h5>
              <p class="card-text text-center px-2 fw-normal">${disc}</p>
            </div>
            <ul class="list-group list-group-flush">

              <li class="list-group-item text-center fs-5  fw-light">$${items.price}</li>
            </ul>
            <div class="card-body">
              <button type="button" class="btn btn-dark ms-4"></i> Details</button>
        <button type="button" class="btn btn-dark py-2 cartButton" data-price=${items.price} data-id=${items.id} data-image=${items.image} data-title=${items.title}>Add to Cart</button>
              
            </div>
          </div></div>`
          // ulElem.insertAdjacentHTML('beforeend',info)

})

let button = document.querySelectorAll(".cartButton");
  
for (let i = 0; i < button.length; i++) {
    let btn = button[i];
    btn.addEventListener("click", addtocart);
    console.log(btn);
    
}
}
let tit;
function truncTitle(title){
  if(title.length>12){
          tit=title.slice(0,12)+"...";
     
        }
      }
  

      let disc;
         
          function trunc(description){
              if(description.length>70 ){
                  disc = description.slice(0,70)+"...";
                // console.log(disc);
                }
          }
          function add(category){
            if(category=='all'){
              handler(product);
            }else{
              let  filterProduct=product.filter(items=>items.category===category)
              handler(filterProduct)
            }

          }

          function addtocart(event){
            let price=Number(event.target.dataset.price);
            console.log(price);
            
            let title=(event.target.dataset.title);
            let id=(event.target.dataset.id);
            let image=(event.target.dataset.image);

            if(id in cart){
              console.log(id,cart);
              cart[id].quantity++;
              
            }else{
              let itemsCart={
              title:title,
              image:image,
              price:price,
              quantity:1
              }
            cart[id]=itemsCart;

            }
            count++;
            sum+=price;


            
    // console.log(img, title);
    
    // console.log(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
            updatecart();
          }


          function updatecart(){
            document.getElementById("count").textContent = count;
    localStorage.setItem("count", count);
    // document.getElementById("sum").textContent = sum;
    localStorage.setItem("sum",Math.round(sum));
}
