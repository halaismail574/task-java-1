var allproducts=document.querySelectorAll(".div .imgs")
var div2=document.querySelector(".div2")
var div1 =document.querySelector(".div1")
var btn1=document.querySelector(".btn-price")
var div3=document.querySelector(".div3")
var totalprice= 0

allproducts.forEach(function(item){
    item.onclick= function(){
        totalprice+=+(item.getAttribute("price"))
    }
})
btn1.onclick=function()
{
    div3.innerHTML=totalprice
  
}