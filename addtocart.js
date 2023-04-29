import navbar from './Components/navbar.js';
console.log("navbar",navbar);

let navbar_div=document.getElementById("header");
navbar_div.innerHTML=navbar();


let arr=JSON.parse(localStorage.getItem("mydata"))||[]
console.log(arr)
displayProduct(arr);


function displayProduct(arr){
    let box2=document.getElementById("box2");
    box2.innerHTML=null;
    let cart_total=document.getElementById("cart_total");
    let totalProduct=0;
    arr.forEach(function(ele,index){

        totalProduct=totalProduct+Number(ele.price);

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let price=document.createElement("p");
        price.innerText=ele.price;
        let btn=document.createElement("button");
        btn.innerText="remove";
        btn.addEventListener("click",function(){
            remove(index)
        })
        div.append(img,price,btn);
        box2.append(div);
        cart_total.textContent=totalProduct;
    })
}

function remove(index){
    arr.splice(index,1);
    console.log(arr);
    localStorage.setItem("mydata",JSON.stringify(arr));
    displayProduct(arr);
}

function checkout(){
    let order=document.getElementById("submit");
    order.addEventListener("click",function(){
        alert("order placed successfully")
    })
}
checkout()