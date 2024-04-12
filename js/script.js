document.onkeydown = function(e) {
    var divs = [
      document.getElementById('div1'),
      document.getElementById('div2'),
      document.getElementById('div3'),
      document.getElementById('div4')
    ];
  
    var currentDivIndex = -1;
  
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].style.opacity === '1') {
        currentDivIndex = i;
        break;
      }
    }
  
    if (e.keyCode == 40) { // Flecha hacia abajo
      if (currentDivIndex !== -1 && currentDivIndex < divs.length - 1) {
        divs[currentDivIndex].style.opacity = '0';
        divs[currentDivIndex + 1].style.opacity = '1';
      }
    } else if (e.keyCode == 38) { // Flecha hacia arriba
      if (currentDivIndex !== -1 && currentDivIndex > 0) {
        divs[currentDivIndex].style.opacity = '0';
        divs[currentDivIndex - 1].style.opacity = '1';
      }
    }
  };
  
  document.addEventListener('wheel', function(event) {
    var divs = [
      document.getElementById('div1'),
      document.getElementById('div2'),
      document.getElementById('div3'),
      document.getElementById('div4')
    ];
  
    var currentDivIndex = 0;
  
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].style.opacity === '1') {
        currentDivIndex = i;
        break;
      }
    }
  
    if (event.deltaY > 0) { // Scrolldown
      if (currentDivIndex !== -1 && currentDivIndex < divs.length - 1) {
        divs[currentDivIndex].style.opacity = '0';
        divs[currentDivIndex + 1].style.opacity = '1';
      }
    } else if (event.deltaY < 0) { // Scrollup
      if (currentDivIndex !== -1 && currentDivIndex > 0) {
        divs[currentDivIndex].style.opacity = '0';
        divs[currentDivIndex - 1].style.opacity = '1';
      }
    }
  });