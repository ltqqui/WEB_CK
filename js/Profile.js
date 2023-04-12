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
// window.onload = function () {
//     userSign = getLocalStorage("userSign");
//     if (userSign === undefined) {
//         userSign = {};
//     }
//     console.log(userSign)
//   };


  var signUpList=getLocalStorage('signUpList');
  var listProfile=[...signUpList]   
  console.log("profile",listProfile)