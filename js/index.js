// import { Product,newProduct,saleProduct } from "./product.js";
// import { renderProfile } from "./profile.js";
// import { getLocalStorage,saveLocalStorage } from "./storage.js";

 const newProduct=[
    {id:1, name:'Adidas prophere black-white',desc:'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.',price:'60',img:'./img/products/car3.jpg',},
    {id:2, name:'Adidas prophere customize',desc:"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",price:'40',img:'./img/products/adidas-prophere-black-white.png'},
    {id:3, name:'Nike shox',desc:"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",price:'80',img:'./img/products/nike-shox-tl.png'},
    {id:4, name:'Adidas swift run',desc:"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.  ",price:'6.60',img:'./img/products/adidas-swift-run.png'},
    {id:5, name:'Adidas tenisky super star',desc:"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",price:'80',img:'./img/products/adidas-tenisky-super-star.png'},
    {id:6, name:'Nike air max ',desc:"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",price:'80',img:'./img/products/nike-air-max-97.png'},
    {id:7,name:'Adidas super star red',desc:"The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",price:'80',img:'./img/products/adidas-super-star-red.png'},
    {id:8,name:'Nike',desc:"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'5.20',img:'./img/products/nike-react-element.png'},
    {id:9,name:'Nike adapt',desc:"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'8.40',img:'./img/products/nike-adapt-bb.png'},
    {id:10,name:'Adidas ultraboost',desc:"Adidas shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'7.50',img:'./img/products/adidas-ultraboost-4.png'},
    {id:11,name:'Adidas yeezy',desc:"Adidas shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'7.50',img:'./img/products/adidas-yeezy-350.png'},
    {id:12,name:'Vans old school',desc:"Vans shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'4.50',img:'./img/products/van-old-school.png'},
  ]
  
   const saleProduct=[
    {id:13,name:'Nike sp dunk',desc:"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'8.90',img:'./img/products/nike-sp-dunk.png'},
    {id:14,name:'Nike flyknit ',desc:"Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'8.20',img:'./img/products/nike-flyknit.png'},
    {id:15,name:'Nike air max 270',desc:"The Nike Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.",price:'8.40',img:'./img/products/nike-air-max-270-react.png'},
    {id:16,name:'Nike air max 97 blue',desc:"The Nike Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.",price:'6.90',img:'./img/products/nike-air-max-97-blue.png'},
    {id:17,name:'Converse chuck taylor',desc:"The Vans Coastal Classic Slip-On features sturdy low profile canvas and textile uppers, padded collars, elastic side accents, and signature rubber waffle outsoles.",price:'8.90',img:'./img/products/converse-chuck-taylor.png'},
    {id:18,name:'Vans black black',desc:"Vans shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",price:'6.50',img:'./img/products/vans-black-black.png'}
  
  ]
  
 function renderProfile(){
    if(getLocalStorage('userSignIn')){
      document.querySelector('.btn-account').innerHTML=getLocalStorage('userSignIn').userName;
      document.querySelector('.signIn').style.display='none'
      document.querySelector('.profile').style.display='block'
      document.querySelector('.signOut').style.display='inline'
      document.querySelector('.signUp').style.display='none'
     
    }
    else{
       
        var aTag = document.querySelectorAll(".buy-now");
        // aTag.href='../html/SignIn.html'
        for(var i of aTag){
            i.href='./html/SignIn.html'
        }  
        console.log(aTag)
    }
    
    document.querySelector('.signOut').onclick=function signOut(){
        localStorage.removeItem('userSignIn');
      window.location.reload();
      window.location.href='../index.html'
    }
  }
  
 
  function saveID(id){
    if(!getLocalStorage('userSignIn')){
        alert(' You need to sign up to be able to purchase')
    }
    saveLocalStorage(id,'ProductID')
}
  function renderProduct (){
    var html=``
    for(var i of newProduct){
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
    document.querySelector('.new').innerHTML=html;
}
 

renderProduct()
// renderProfile()





function renderSaleProduct (){
    var html=``
    for(var i of saleProduct){
        html+=`
        <div class="card">
      <div class="card-body">
        <img src="${i.img}" class="w-100" alt="" />
        <div class="by-now">
          <a href="../html/Detail.html"onclick="saveID(${i.id})">By now</a>
        </div>
      </div>
      <div class="card-content">
        <p>${i.name}</p>
        <span>${i.price}</span>
      </div>
      <img src="../img/logo/sales.png" class="logo-sale" alt="" />
    </div>
        `
    }
    document.querySelector('.sales').innerHTML=html;
}

renderSaleProduct()


 function saveLocalStorage(ob,key){
    var str=JSON.stringify(ob);
    localStorage.setItem(key,str);
}

 function getLocalStorage(key){
   if(localStorage.getItem(key)){
    var str= localStorage.getItem(key);
    var ob=JSON.parse(str);
    return ob;
   }
   return undefined;
}

window.onload = function () {
 var userSignIn = getLocalStorage("userSignIn");
  if (userSignIn === undefined) {
    userSignIn = {};
  }
  console.log(userSignIn)
  renderProfile()
};


