import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";
//import './cart-class.js';
//import './backend-practice.js'
import { loadProducts,loadProductsFetch } from "./products.js";
import { loadCart } from "./cart.js";

async function loadPage(){

  try{

    //throw 'error1';

    await loadProductsFetch();

    const value=await new Promise((resolve,reject)=>{
      //throw 'error2';
      loadCart(()=>{
        //reject('error3');
        resolve();
        
      });
      });

  }catch(error){
    console.log('Unexpected error; Please try again Later.');
  }

  

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();


  


/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
    resolve();
  });
  })
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})
  */

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

/* 
ASYN-AWAIT
1.)It is the shortcut for promises.
2.)async makes a function to return promise.
3.) Await=> let us wait for a promise to finish,before going to next line.
4.)Await=>let us write asynchronous code as normal code.
5.) we can only use await, when we are inside async function.
NOTE: a.)Async-await can only be used with promises,it does'nt do anything with callback.
      b.)the closest function has to be async.
      c.)the best pratice to handle asynchronous code,is to use ASYNC-AWAIT,over callback and response.



*/
