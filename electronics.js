import navbar from './Components/navbar.js';
console.log("navbar",navbar);

let navbar_div=document.getElementById("header");
navbar_div.innerHTML=navbar();


async function getData(){
    let res=await fetch('https://fakestoreapi.com/products/category/electronics');
    let data=await res.json();
    console.log(data);
    appendData(data)
}
getData();


function appendData(data){
    let box=document.getElementById("box");
    box.innerHTML=null
    data.forEach(function(ele){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let price=document.createElement("p");
        price.innerText=ele.price;
        let rating=document.createElement("p");
        rating.innerText="rating";
        rating.innerText=ele.rating.rate;
        let btn=document.createElement("button");
        btn.innerText="add to cart";
        btn.addEventListener("click",function(){
            addData(ele)
        })
        div.append(img,price,rating,btn);
        box.append(div)
    })
}


let arr=JSON.parse(localStorage.getItem("mydata"))||[]
function addData(ele){
    arr.push(ele);
    console.log(ele);
    localStorage.setItem("mydata",JSON.stringify(arr));
}
