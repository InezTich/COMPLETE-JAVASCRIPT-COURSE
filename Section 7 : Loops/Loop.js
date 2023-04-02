var num = 0;
for(var i=0; i<100; i++){
    console.log("I will finish my homework on time!")
}

while(num < 100){
    console.log("Here is " + num);
    num += 1;
}

// Loop Data from Array

var arr = ["Jonh","Peter","Fred","Mastsek","FyFy"];

for(var i=0; i < arr.length; i++){
    console.log("Index "+ i + " => " + arr[i]);
}

// break keyword

var num3 = [1,2,3,4,5,6,7];
var count;
for(count = 0; count <= num3.length; count++){
    if(count == 5){
        break;
    }
    console.log(num3[count]);
}

// continues keyword

var fruit = ["banana","apple","mango","watermilon","coconut"];

for (let n = 0; n < fruit.length; n++) {
    
    if(n == 3){
        continue;
    }
    console.log(fruit[n]);
}