///--Modo osuro--///
const btnModo=document.querySelector(".iconSun");
btnModo.addEventListener("click", ()=>{
    if(document.body.classList.toggle("light"))return(btnModo.textContent="🌑");
    btnModo.textContent="🌞";
})

//------///
btnOpen.onclick=function(){
    nave.classList.toggle('show-menu')
  }