var square = document.querySelectorAll('figure');




for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('mousemove', function(e){
  var x = e.offsetX;
  var y = e.offsetY;

  this.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, #fff5 1%, #0000 60%)';

});

square[i].addEventListener('mouseout', function(e){
  this.style.background = 'radial-gradient(circle at 122px 100px, #0000 1%, #0000 70%)';
});
}