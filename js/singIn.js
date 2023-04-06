var userSign={};


function dangNhap(){
    var userName=document.querySelector('#userName').value;
    var password=document.querySelector('#pas').value;
    userSign=new UserSignIn(userName,password);
    var valid=kiemTraRong(userSign.userName, ".tbUserName", "User name")&kiemTraRong(userSign.password, ".tbPas", "Password")

    if(kiemTraRong(userSign.userName, ".tbUserName", "User name")){
       valid&= kiemTraUserName(userSign.userName, ".tbUserName", "User name")
    }
    if(kiemTraRong(userSign.password, ".tbPas", "Password")){
    valid&=kiemTraRong(userSign.password, ".tbPas", "Password")
    }
    if(!valid)
    return ;
    saveLocalStorage(userSign,'userSign')
   var arr= getLocalStorage('signUpList')
   for(var i of arr){
    if(i.userName===userSign.userName && i.password===userSign.password){
        alert('Đăng nhập thành công')
        window.location.href='../html/index.html'
    }
   }
}

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