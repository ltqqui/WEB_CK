import {Product} from "./product.js";
// console.log(Product) 


document.querySelector(".input-search").oninput=function renderSearch(){
    var valueSearch= document.querySelector(".input-search").value
    var productSearch
     
    if(valueSearch===''){
        console.log(valueSearch)
        productSearch=[]
    }
    else{
        productSearch=Product.filter(sp=>sp.name.toLowerCase().includes(valueSearch));
    }
    console.log(productSearch)
    var html=``
    for(var i of productSearch){
        html+=`
        <div class="card">
        <div class="card-body">
          <img src="${i.img}" class="" alt="" />
          <div class="by-now">
            <a href="./Detail.html" class="buy-now" onclick="saveID(${i.id})">By now</a>
          </div>
        </div>
        <div class="card-content">
          <p>${i.name}</p>
          <span>${i.price}$</span>
        </div>
      </div>
        `
    }
    document.querySelector(".row").innerHTML=html;
}