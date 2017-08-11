console.log('Loaded!');
var element =  document.getElementById('main-text');
element.innerHTML='i am bala.';


var img=document.getElementById('madi');
var marginRight=0;
function moveLeft (){
    marginRight=marginRight + 100;
    img.style.marginRight = marginRight + 'px';
    
}
img.onclick = function(){
    var interval=setInterval(moveLeft,50);
    
};
