console.log("I am very proud to see it.");
var button = document.getElementById("counter");


button.onclick = function(){
    
    var request = new XMLHttpRequest();
Request.onreadystatechange = function(){
  
  if (Request.readyState === XMLHttpRequest.DONE){
  
  if(Request.status===200){
  counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
  
     }
  }
  Request.open('get', 'http://balusami2001.imad.hasura-app.io/counter',true);
  Request.send(null);
};
};