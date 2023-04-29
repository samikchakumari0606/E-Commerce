
import navbar from './Components/navbar.js';
console.log("navbar",navbar);

let navbar_div=document.getElementById("header");
navbar_div.innerHTML=navbar();

async function getOfferData(){
    let res=await fetch('https://fakestoreapi.com/products');
    let data=await res.json();
    console.log(data);
    appendData(data);

}
getOfferData();

function appendData(data){
    let box=document.getElementById("box");
    data.forEach(function(el){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let price=document.createElement("p");
        price.innerText=el.price;
        let rating=document.createElement("p");
        rating.innerText=el.rating.rate;
        let title=document.createElement("p");
        title.innerText=el.title;
        let btn=document.createElement("button")
        btn.innerText="add to cart";
        btn.addEventListener("click",function(){
            addData(el)
        })
        div.append(img,price,rating,title,btn);
        box.append(div);
    })
}

let arr=JSON.parse(localStorage.getItem("mydata"))||[]
function addData(el){
    arr.push(el);
    console.log(arr);
    localStorage.setItem("mydata",JSON.stringify(arr));
}