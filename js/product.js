

var Product=[
    {id:1, name:'Adidas prophere black-white',price:'60',img:'../img/products/car3.jpg'},
    {id:2, name:'Adidas prophere customize',price:'40',img:'../img/products/adidas-prophere-black-white.png'},
    {id:3, name:'Nike shox',price:'80',img:'../img/products/nike-shox-tl.png'},
    {id:4, name:'Adidas swift run',price:'6.60',img:'../img/products/adidas-swift-run.png'},
    {id:5, name:'Adidas tenisky super star',price:'80',img:'../img/products/adidas-tenisky-super-star.png'},
    {id:6, name:'Nike air max  ',price:'80',img:'../img/products/nike-air-max-97.png'},
    {id:7,name:'Adidas super star red',price:'80',img:'../img/products/adidas-super-star-red.png'},
    {id:8,name:'Nike',price:'5.20',img:'../img/products/nike-react-element.png'},
    {id:9,name:'Nike adapt',price:'8.40',img:'../img/products/nike-adapt-bb.png'},
    {id:10,name:'Adidas ultraboost',price:'7.50',img:'../img/products/adidas-ultraboost-4.png'},
    {id:11,name:'Adidas yeezy',price:'7.50',img:'../img/products/adidas-yeezy-350.png'},
    {id:11,name:'Vans black black',price:'6.50',img:'../img/products/vans-black-black.png'},
    {id:12,name:'Vans old school',price:'4.50',img:'../img/products/van-old-school.png'},
    {id:13,name:'Nike sp dunk',price:'8.90',img:'../img/products/nike-sp-dunk.png'},
    {id:14,name:'Nike flyknit ',price:'8.20',img:'../img/products/nike-flyknit.png'},
    {id:15,name:'Nike air max 270',price:'8.40',img:'../img/products/nike-air-max-270-react.png'},
    {id:16,name:'Nike air max 97 blue',price:'6.90',img:'../img/products/nike-air-max-97-blue.png'},
    {id:17,name:'Converse chuck taylor',price:'8.90',img:'../img/converse-chuck-taylor.png'},
]

var newProduct=[
    {id:1, name:'Adidas prophere black-white',price:'60',img:'../img/products/car3.jpg'},
    {id:2, name:'Adidas prophere customize',price:'40',img:'../img/products/adidas-prophere-black-white.png'},
    {id:3, name:'Nike shox',price:'80',img:'../img/products/nike-shox-tl.png'},
    {id:4, name:'Adidas swift run',price:'6.60',img:'../img/products/adidas-swift-run.png'},
    {id:5, name:'Adidas tenisky super star',price:'80',img:'../img/products/adidas-tenisky-super-star.png'},
    {id:6, name:'Nike air max  ',price:'80',img:'../img/products/nike-air-max-97.png'},
    {id:11,name:'Adidas yeezy',price:'7.50',img:'../img/products/adidas-yeezy-350.png'},
    {id:11,name:'Vans black black',price:'7.50',img:'../img/products/vans-black-black.png'},
    {id:12,name:'Vans old school',price:'4.50',img:'../img/products/van-old-school.png'},
]

var saleProduct=[
    {id:7,name:'Adidas super star red',price:'80',img:'../img/products/adidas-super-star-red.png'},
    {id:8,name:'Nike',price:'5.20',img:'../img/products/nike-react-element.png'},
    {id:9,name:'Nike adapt',price:'8.40',img:'../img/products/nike-adapt-bb.png'},
    {id:15,name:'Nike air max 270',price:'8.40',img:'../img/products/nike-air-max-270-react.png'},
    {id:16,name:'Nike air max 97 blue',price:'6.90',img:'../img/products/nike-air-max-97-blue.png'},
    {id:17,name:'Converse chuck taylor',price:'8.90',img:'../img/products/converse-chuck-taylor.png'},

]

function renderProduct (){
    var html=``
    for(var i of newProduct){
        html+=`
        <div class="card">
        <div class="card-body">
          <img src="${i.img}" class="" alt="" />
          <div class="by-now">
            <a href="./Detail/Detail.html">By now</a>
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

function renderSaleProduct (){
    var html=``
    for(var i of saleProduct){
        html+=`
        <div class="card">
      <div class="card-body">
        <img src="${i.img}" class="w-100" alt="" />
        <div class="by-now">
          <a href="../Detail/Detail.html">By now</a>
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


function renderProfile(){
  if(getLocalStorage('userSign')){
    document.querySelector('.btn-account').innerHTML=getLocalStorage('userSign').userName;
    document.querySelector('.signIn').style.display='none'
    document.querySelector('.profile').style.display='block'
    document.querySelector('.signOut').style.display='inline'
    document.querySelector('.signUp').style.display='none'
  }
  
  document.querySelector('.signOut').onclick=function signOut(){
      localStorage.removeItem('userSign');
    window.location.reload();
  }
}
renderProfile()

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
  userSign = getLocalStorage("userSign");
  if (userSign === undefined) {
      userSign = {};
  }
  console.log(userSign)
};