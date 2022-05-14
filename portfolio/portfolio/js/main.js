


var prBar = document.querySelector('.progress');

window.onscroll = function(){
  let a = parseInt(document.documentElement.scrollTop);
  let b = document.documentElement.scrollHeight - document.documentElement.clientHeight;


  prBar.style.width = (100 - (a / b * 100)) + '%';
  // console.log(`${(window.pageYOffset / a * 100)}%`);
  
  console.log();
}