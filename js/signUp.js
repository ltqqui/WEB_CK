var signUpList=[];

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

function hiddenConfirmPassword(){
    var pas=document.querySelector('#confirmPas');
    var hidden3=document.querySelector('#hidden3');
    var hidden4=document.querySelector('#hidden4');
    if(pas.type==='password'){
        pas.type='text';
        hidden3.style.display="none";
        hidden4.style.display="inline"
      
    }
    else{
        pas.type='password';
        hidden3.style.display="inline";
        hidden4.style.display="none" 
    }
}

function kiemTraTrung(arr,user){
    for(var i of arr){
        if(i.email===user.email){
            alert('The Email was registered' )
            return false
        }
        else 
        return true
    }
}

function themUser() {
    var email=document.querySelector('#email').value;
    var userName=document.querySelector('#userName').value;
    var name=document.querySelector('#name').value;
    var pas=document.querySelector('#pas').value;
    var confirmPassword=document.querySelector("#confirmPas").value
    var user=new UserSignUp(email,userName,name,pas);
    var valid =
    kiemTraRong(user.email, ".tbEmail", "Email") &
    kiemTraRong(user.userName, ".tbUserName", "Use name") &
    kiemTraRong(user.name, ".tbName", "Name") &
    kiemTraRong(user.hiddenPassword, ".tbPas", "Password")&
    kiemTraRong(confirmPassword,".tbConfirm","Confirm Password");

    if( kiemTraRong(user.email, ".tbEmail", "Email")){
        valid&=kiemTraEmail(user.email,".tbEmail",'Email')
    }
    if( kiemTraRong(user.userName, ".tbUserName", "Use name")){
        valid&=kiemTraUserName(user.userName,".tbUserName",'Use name')
    } 
    if( kiemTraRong(user.name, ".tbName", "Name")){
        valid&=kiemTraName(user.name,".tbName",'Name')
    } 
    if( kiemTraRong(user.password, ".tbPas", "Password")){
        valid&=kiemTraPassword(user.password,".tbPas",'Password')
    }
    if(kiemTraRong(confirmPassword,".tbConfirm","Confirm Password")){
        valid&=kiemTraConfirm(user.password,confirmPassword,'.tbConfirm',"Confirm Password")
    }
    if(signUpList.length>0){
        valid&=kiemTraTrung(signUpList,user)
    }
    if(!valid)
    return ;
    signUpList.push(user)
    saveLocalStorage(signUpList,'signUpList')
    window.location.href="../html/SignIn.html"
};
console.log(signUpList)


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
    signUpList = getLocalStorage("signUpList");
    if (signUpList == undefined) {
        signUpList = [];
    }
    console.log(signUpList)
  };





// var valid

//     function kiemTraEmail(){
//         var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//         if((document.querySelector('#email').value)===''){
//             document.querySelector('.tbEmail').innerHTML='Email not be empty!!'
//             valid= false
//             console.log(valid)
//             return false
//         }
//          if(!regex.test(document.querySelector('#email').value)){
//             document.querySelector('.tbEmail').innerHTML='Email is (0-9),(a-z),(A-Z) and (*/...)!!!!'
//             valid=false
//             console.log(valid)
//             return false
//         }
//         else {
//         document.querySelector('.tbEmail').innerHTML=''
//         valid=true
//         console.log(valid)
//         return true
//         }
//     }

//     function kiemTraName(){
//         var regex=/\b([A-ZÀ-ÿ][-,a-z.']+[ ]*)+/
        
//         if((document.querySelector('#name').value)===''){
//             document.querySelector('.tbName').innerHTML='Name not be empty!!'
//             valid=false
//             return false
//         }
//         if(!regex.test(document.querySelector('#name').value)){
//             document.querySelector('.tbName').innerHTML='Names are the characters a-z!!'
//             valid=false
//             return false
//         }
//         else {
//             document.querySelector('.tbName').innerHTML=''
//         // valid=true
//         return true
//         }
//     }

//     function kiemTraPas(){
//         var regex=/^[A-Za-z]\w{7,14}$/
//         if((document.querySelector('#pas').value)===''){
//             document.querySelector('.tbPas').innerHTML='Password not be empty!!'
//             valid=false
//             return false
//         }
//         if(!regex.test(document.querySelector('#pas').value)){
//             document.querySelector('.tbPas').innerHTML='Password is (0-9),(a-z),(A-Z) !!'
//             valid=false
//             return false
//         }
//         else {
//         document.querySelector('.tbPas').innerHTML=''
//         // valid==true
//         return true
//         }
//     }

//     function kiemTraConfirm(){
//         if((document.querySelector('#confirmPas').value)===''){
//             document.querySelector('.tbConfirm').innerHTML='Confirm password not be empty!!'
//             // valid=false
//             return false
//         }
//         if((document.querySelector('#pas').value)!=(document.querySelector('#confirmPas').value)){
//             document.querySelector('.tbConfirm').innerHTML='Not match Password'
//             // valid=false
//             return false
//         }
//         else {
//         document.querySelector('.tbConfirm').innerHTML=''
//         // valid=true
//         return true
//         }
//     }

//     console.log(valid+'123')