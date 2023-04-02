var btn = document.getElementById('btn-click');
var bgColor = document.querySelector('header div');
// btn.onclick = function(){
//     console.log("Hello World");
// }
function btnOnclick() {
    bgColor.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
}

// btn.onclick = btnOnclick();  this line with () function after broswer  loaded the function call automatically

// btn.onclick = btnOnclick;  // this line without () the function is execute when user click on buttton

console.log(bgColor);

// other way

btn.addEventListener('click', function(){
    console.log('Button Clicked');
})
// or 
btn.addEventListener('click', btnOnclick);