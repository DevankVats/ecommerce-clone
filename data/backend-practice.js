const xhr=new XMLHttpRequest();

xhr.addEventListener('load',()=>{
  console.log(xhr.response)
})

xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
xhr.send();// asynchrounos code does'nt waits for xomplete executon sends requests and immediatley jumps to next line
//xhr.response//undefined


/* 1.) at first xhr.response=> undefined, as it takes time to send request,and get the respose,so we have to add eventListener
2.) open() takes two parameters => open(request_type,URL)

3.) a backend only supports certain sets of URL paths.
4.) if we send url request to a path that is not supported,the backend will respond with an error.

NOTE: a.)Staus code=> starts with 4 or 5 =>FAILELD  e.g,404; starting with 4=> problem from our code, starts
         with 5=>backend problem 
      b.)Staus code=> starts with 2 => SUCCEEDED e.g,204


NOTE: a.)The list of all URL paths supported is known as => BACKEND API   
      b.)backend can respond with different types of data. e.g, text,image,json   




*/