function navbar(){
    return`
    <div id="headOne">
      <div id="headOneO">
        <a href="./index.html">
          <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
        />
        </a>
       
        <!-- <p>Explore Plus <span id="plus"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"></span></p> -->
      </div>
      <div id="search">
        <input
          type="text"
          placeholder="seacrh for products,brands and more"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div id="headTwo">
      <div id="login">
       <a href="./login.html"><button>Login</button></a> 
      </div>
      
      <div>
        <p>Become a seller</p>
      </div>
      <div>
        <p>More</p>
      </div>
      <div id="addtoCart">
          <a href="./addToCart.html"> 
              <p>
              <span><i class="fa-sharp fa-solid fa-cart-shopping"></i></span>Cart
              </p>
          </a>
       
      </div>
    </div>`
}
export default navbar;