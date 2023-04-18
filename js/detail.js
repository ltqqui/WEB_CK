
import { renderProfile } from "./profile.js";
import {Product} from "./product.js";
import { getLocalStorage } from "./storage.js";
  
console.log(Product)
renderProfile()
 let id= getLocalStorage('ProductID')
  console.log(id)
  function renderDetail(){
    var html=``
    for(var item of Product ){
      if(item.id===id){
        html+=`
        <div class="row">
        <div class="col-6 col1">
          <img src=${item.img} alt="">
        </div>
        <div class="col-6 col2">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <h5>${item.price}$</h5>
          <button class="btn btn-success">Add to cart</button>
        </div>
      </div>
      `
      }
    }
    document.querySelector('.content').innerHTML=html
  }
  renderDetail()