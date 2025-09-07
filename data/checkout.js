import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";
//import './cart-class.js';
//import './backend-practice.js'
import { loadProducts } from "./products.js";
import { loadCart } from "./cart.js";


Promise.all([
  new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });
}),
  new Promise((resolve)=>{
    loadCart(()=>{
    resolve();
  });
  })
]).then((value)=>{
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
})

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve();
  });

}).then(()=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
    resolve();
  });
  });

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})
  */

/*
loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/


/*   
PROMISES
 1.) better way to handle asynchronous code 
 2.)similiar to done() function 
 3.)let us wait for some code to finish,before going to the next step
 4.)resolve() is a function,that lets us control to go the next step.
 5.Promises helps us keep our code flat and avoid too nesting(like callback())
 Note:use promises instead of callbacks as it keeps our code flat.
 6.We can run multiple promises together.
*/ 
