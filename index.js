
// import navbar from './Components/navbar.js';
// console.log("navbar",navbar);

// let navbar_div=document.getElementById("header");
// navbar_div.innerHTML=navbar();

function slideshow(){
    let arr=[
        'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1522682078546-47888fe04e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]

    let image=document.createElement("img");
    let box=document.getElementById("slideshow");

    let i=0;
    image.src=arr[0];
    box.append(image);
    i++;
    setInterval(function(){
        if(i==4){
            i=0;
        }
    image.src=arr[i];
    box.append(image);
    i++;
    },3000)
}
slideshow()