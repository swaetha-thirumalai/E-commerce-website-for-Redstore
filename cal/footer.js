function btn() {
        alert("Product added to cart!");
    
}
const cart=document.getElementById("cart");
    document.getElementById("btn").onclick=function add_item(){
        const item=cart.innerText;
        cart.innerText=parseInt(item,10)+1;
    }  