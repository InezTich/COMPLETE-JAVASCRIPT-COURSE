// update html element


var countdownElement = document.getElementById('countdown');
console.log(countdownElement);

var bgElement = document.getElementById('background-img');
// console.log(bgElement.src);


var inittalCountdownVal = countdownElement.innerHTML;
// console.log(inittalCountdownElement);


setInterval(function(){
    inittalCountdownVal = inittalCountdownVal > 0 ?
    inittalCountdownVal - 1 : 0;
    countdownElement.innerHTML = inittalCountdownVal; 
    var backImagePath = inittalCountdownVal % 2 === 0 ? '/Section 9 : DOM (Document Object Model)/Screenshot 2023-03-31 at 8.04.23 PM.png' :
    '/Section 9 : DOM (Document Object Model)/Screenshot 2023-03-31 at 8.47.24 PM.png';
    bgElement.src = backImagePath;
}, 1000);