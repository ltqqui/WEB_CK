import {getLocalStorage} from './storage.js'

export function renderProfile(){
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
    window.location.href='../html/index.html'
  }
}

renderProfile()

