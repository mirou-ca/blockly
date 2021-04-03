var node = document.querySelector('.node');
var container = document.querySelector('.container');
var body = document.querySelector('body');
node.addEventListener('click',function(){
    container.classList.toggle('container-js'); 
    body.classList.toggle('container-js');
    node.classList.toggle('node-js');
     
}) 
var levels = document.querySelector('.fa-chevron-right');
var bloclevels = document.querySelector('.container .bloc-levels') ; 
bloclevels.classList.add('not-showlist');
levels.addEventListener('click',function(){
    bloclevels.classList.toggle('not-showlist');
});
