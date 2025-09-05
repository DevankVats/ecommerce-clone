import { getProduct } from "./products.js";

class Cart{
  cartItems;
  localStorageKey;

  constructor(localStorageKey){
    this.localStorageKey=localStorageKey;
    this.loadToStorage();
  }


   loadToStorage(){
      this.cartItems=JSON.parse(localStorage.getItem(this.localStorageKey));

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

      }


    saveToStorage(){
      localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
    }


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
    }


    removeFromCount(productId){
      let newCart=[];

      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId!=productId){
          newCart.push(cartItem);
        }
      });
    this.cartItems=newCart;

    this.saveToStorage();
    }


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



const cart=new Cart('cart-oop');
const businessCart=new Cart('cart-business');


console.log(cart);
console.log(businessCart);







/*
CLASS=> class helps generate these objects
1.)OOPS:tries to represent real world entites and their functions releted to them.
2.)note: all code working properly as it is working in past, just we arranged code in objecct.
3.)OOPS makes our work easy, we can create multiple objects by copying.

NOTE: a.)we can generate objects with the help of constructor.
      b.)the method name to create constructor is always constructor.
      c.)constructor should not return anything;
*/



