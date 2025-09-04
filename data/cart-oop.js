import { getProduct } from "./products.js";
function Cart(localStorageKey){
  const cart={
    cartItems:undefined,
    loadToStorage(){
      this.cartItems=JSON.parse(localStorage.getItem(localStorageKey));

      if(!this.cartItems){
        this.cartItems=[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'
      },
      {
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId:'2'
      }];
      }

      },
    saveToStorage(){
      localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
    },
    addToCart(productId){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingItem = cartItem;
        }
      });


          if(matchingItem){
            matchingItem.quantity +=1;
          }
          else{
            this.cartItems.push({
            productId:productId,
            quantity:1,
            deliveryOptionId:'1'
          });
          }
    this.saveToStorage();
    },

    removeFromCount(productId){
      let newCart=[];

      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId!=productId){
          newCart.push(cartItem);
        }
      });
    this.cartItems=newCart;

    this.saveToStorage();
    },

    updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;

      this.cartItems.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
      })
      matchingItem.deliveryOptionId=deliveryOptionId;
      this.saveToStorage();
    }

}


return cart;
}




const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');



cart.loadToStorage();
businessCart.loadToStorage();
console.log(cart);
console.log(businessCart);







/*
1.)OOPS:tries to represent real world entites and their functions releted to them.
2.)note: all code working properly as it is working in past, just we arranged code in objecct.
3.)OOPS makes our work easy, we can create multiple objects by copying.
*/



