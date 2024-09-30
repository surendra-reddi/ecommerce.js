// const ulElem=document.querySelector('#row');
// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then((data)=>{
//     console.log(data);
    
//    data.forEach((ele)=>{
//     // let list=<li>${ele.id}</li>


//     let description=ele.description;
//     let disc;
//     function trunc(description){
//         if(description.length>70 ){
//             disc = description.slice(0,90)+"...";



//         }
//     }
//     trunc(description)
// // console.log(disc);

//     // console.log(description);


//     let title=ele.title;
//     let tit;
//     function truncTitle(title){
//       if(title.length>12){
//         tit=title.slice(0,12)+"...";
//       }
//     }

//     truncTitle(title);
//     // console.log(tit);
    


//     let card=` <div class="col"><div class="card mb-5" style="width: 18rem;">
//             <img src="${ele.image}" class="card-img-top ms-5 mt-2 " style="height:200px; width:200px;  " alt="...">
//             <div class="card-body">
//               <h5 class="card-title text-center">${tit}</h5>
//               <p class="card-text text-center px-2 fw-normal">${disc}</p>
//             </div>
//             <ul class="list-group list-group-flush">

//               <li class="list-group-item text-center fs-5  fw-light">$${ele.price}</li>
//             </ul>
//             <div class="card-body">
//               <button type="button" class="btn btn-dark ms-4"></i> Details</button>
//               <button type="button" class="btn btn-dark ms-2"></i> Add to cart</button>
//             </div>
//           </div></div>`
//         //   console.log(card);
          
//     ulElem.insertAdjacentHTML("beforeend",card);
// })
// })

const link="https://fakestoreapi.com/products";

async function apiHandler(){
  fetch(link).then(res=>res.json())
  .then(data=>{
    handler(data)
    console.log(data);
    
})
}
apiHandler()

const ulele=document.querySelector('#row');

function handler(card){
  console.log(card);



card.forEach((items)=>{
  truncTitle(items.title)
  trunc(items.description)
  info=` <div class="col"><div class="card mb-5 ms-2s"  style="width: 18rem;">
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
               <button type="button" class="btn btn-dark ms-2"></i> Add to cart</button>
             </div>
          </div></div>`
          ulele.insertAdjacentHTML('beforeend',info)
})
}

let tit;
function truncTitle(title){


  if(title.length>12){
    tit=title.slice(0,12)+"..."
  }
}
let disc;
function trunc(description){
  if(description.length>70){
    disc=description.slice(0,70)+"..."
    console.log(disc);
  }
}