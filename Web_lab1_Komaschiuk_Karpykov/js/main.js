// Progressbars

var progress = document.querySelectorAll('.progress-value');

var filled = document.querySelectorAll('.my-progress');

for (var i = 0; i < progress.length; i++) {
  filled[i].style.width = 100 - parseInt(progress[i].textContent) + '%';
}

// Touchscreen device detection

isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

if (isMobile.any()) {
 document.querySelector('body').classList.add('touchscreen');
}


// Widgets opening/closing

var spoilers = document.querySelectorAll('.spoiler');

for (var i = 0; i < spoilers.length; i++) {
  spoilers[i].onclick = function(){
    this.classList.toggle('spoiler-active');

    var spoilerItem = this.nextElementSibling;
    spoilerItem.classList.toggle('spoiler-active');

    if(getComputedStyle(spoilerItem).maxHeight === '0px' && spoilerItem.classList.contains('spoiler-active')){
      spoilerItem.style.maxHeight = spoilerItem.scrollHeight + 'px';
      function computeHeight(){
        if(spoilerItem.classList.contains('spoiler-active')){
          spoilerItem.style.maxHeight = 'none';
        }
      }
      setTimeout(computeHeight, 300);
    }
    
    else{
       spoilerItem.style.maxHeight = spoilerItem.scrollHeight + 'px';
       function returnHeight(){
        spoilerItem.style.maxHeight = '0px';
       }
      setTimeout(returnHeight, 10);
    }
  }
}



// Sliders

new tns({
  container: '.slider-testimonials',
  speed: 200,
  controls: false,
  mouseDrag: true,
  autoHeight: true
});

new tns({
  container: '.wrap', // Pictures
  speed: 200,
  mouseDrag: true,
  loop: true,
  responsive: {
    510: {
      disable: true
    }
  }
});



