
var selectedElement = document.getElementById('countdown');
var ImgPath = document.getElementById('background-img');
var countDownVal =  selectedElement.innerHTML;


var interval = setInterval(function(){
    countDownVal = countDownVal > 0 ? countDownVal - 1 : 0;
    selectedElement.innerHTML = countDownVal;
    var backImagePath = countDownVal % 2 === 0 ? 'wallhaven-39veg6.png' :
    'wallhaven-49lv1k.jpg';
    ImgPath.src = backImagePath;
    selectedElement.style.fontSize = countDownVal * 100 + 'px';
    console.log(countDownVal * 100 + 'px');
    if(countDownVal <= 0){
        clearInterval(interval);
    }
}, 1000);
console.log(countDownVal);