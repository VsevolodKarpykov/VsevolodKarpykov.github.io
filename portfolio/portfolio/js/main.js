var square = document.querySelectorAll('figure');




for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('mousemove', function(e){
  var x = e.offsetX;
  var y = e.offsetY;

  this.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, #fff5 1%, rgba(255, 255, 255, .15) 60%)';

});

square[i].addEventListener('mouseout', function(e){
  this.style.background = 'radial-gradient(circle at 122px 100px, rgba(255, 255, 255, .15) 1%, rgba(255, 255, 255, .15) 70%)';
});
}