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
  
  
   function renderProfile(){
    if(getLocalStorage('userSignIn')){
      document.querySelector('.btn-account').innerHTML=getLocalStorage('userSignIn').userName;
      document.querySelector('.signIn').style.display='none'
      document.querySelector('.profile').style.display='block'
      document.querySelector('.signOut').style.display='inline'
      document.querySelector('.signUp').style.display='none'
    }
    
    document.querySelector('.signOut').onclick=function signOut(){
        localStorage.removeItem('userSignIn');
      window.location.reload();
      window.location.href='../index.html'
    }
  }
  
  renderProfile()