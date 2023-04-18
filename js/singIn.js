
import {saveLocalStorage,getLocalStorage} from './storage.js';
import { renderProfile } from './profile.js';

var userSignIn={};
renderProfile();


function hiddenPassword(){
    var pas=document.querySelector('#pas');
    var hidden1=document.querySelector('#hidden1');
    var hidden2=document.querySelector('#hidden2');
    if(pas.type==='password'){
        pas.type='text';
        hidden2.style.display="inline"
        hidden1.style.display="none";
      
    }
    else{
        pas.type='password';
        hidden2.style.display="none"    
        hidden1.style.display="inline";
    }
}


document.querySelector("#hidden1").onclick =hiddenPassword
document.querySelector("#hidden2").onclick =hiddenPassword



function dangNhap(){
    var userName=document.querySelector('#userName').value;
    var password=document.querySelector('#pas').value;
    userSignIn=new UserSignIn(userName,password);
    var valid=kiemTraRong(userSignIn.userName, ".tbUserName", "User name")&kiemTraRong(userSignIn.password, ".tbPas", "Password")

    if(kiemTraRong(userSignIn.userName, ".tbUserName", "User name")){
       valid&= kiemTraUserName(userSignIn.userName, ".tbUserName", "User name")
    }
    if(kiemTraRong(userSignIn.password, ".tbPas", "Password")){
    valid&=kiemTraRong(userSignIn.password, ".tbPas", "Password")
}
if(!valid)
return ;

   var arr= getLocalStorage('signUpList')
   if(arr!=undefined){
    for(var i of arr){
        if(i.userName==userSignIn.userName && i.password==userSignIn.password){
            var dn=true;
        }
        else 
        dn=false                                                                                                    
       }
   }
   if(dn==true){
    alert('Đăng nhập thành công')
    saveLocalStorage(userSignIn,'userSignIn')
    window.location.href='../html/index.html'
    document.querySelector('.btn-account').innerHTML=getLocalStorage('userSignIn').userName
   }
   else {
    alert("User name or password incorrect")
    return ;
   }

   console.log(userSignIn)
}
document.querySelector('#signIn').onclick= dangNhap
document.querySelector(".form").onchange=dangNhap



window.onload = function () {
    userSignIn = getLocalStorage("userSignIn");
   var arr=getLocalStorage('signUpList');
    if (userSignIn === undefined) {
        userSignIn = {};
    }
    console.log(userSignIn)
  };