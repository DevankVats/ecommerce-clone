export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=[{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2
},
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}];
}



function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));

}

export function addToCart(productId){
  let matchingItem;
      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
      })

      if(matchingItem){
        matchingItem.quantity +=1;
      }
      else{
        cart.push({
        productId:productId,
        quantity:1
      });
      }
saveToStorage();
}
/*
1.CREATE A MODULE 
a.) create a file
b.)don't load the filw with <script></script>
NOTE: any varibale we create inside the file,will be contained inside the file,does'nt conflicts with another file name.

2.GET A VARIABLE OUT OF A FILE
a.)add type="module" attribute
b.)Export
c.)Import

3. CONDITION FOR MODULES TO DO TASK
a.) all items should be imported in begining.
b.)modules only operates through live server
  ADVANTAGES
  a.) it helps us avoid naming conflicts.
  b.)don't have to worry about orders of file.

*/

export function removeFromCount(productId){
  let newCart=[];

  cart.forEach((cartItem)=>{
    if(cartItem.productId!=productId){
      newCart.push(cartItem);
    }
  });
cart=newCart;

saveToStorage();
}