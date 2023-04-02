// 

var PI = 3.14;  // Global Variable

console.clear()
function sayHello(){
    var PI = 5; // Local Variable
    alert("Hello world");
}




// function no param
function get_info_user(){
    let name = prompt("What is your name: ");
    let age = prompt("How old are you? ");
    let position = prompt("What is your job: ");
    console.log("Hello "+name + " Welcome to our program " + "you are "+age +" your work is "+ position);
}


// function has args and return

function cal_age(a,b){
    return a - b;
}
function say_name(person){
    console.log("Welcome " + person);
}

sayHello();
get_info_user()

var sum = cal_age(2023,1996);
console.log(sum);
say_name("Groovy")

// hoisting variable

str1 = "Hoisting can using variable before declear";
console.log(str1);
var str1;

var id;
console.log(id); // undefined

var other_funct = function(num1,num2){
    console.log("Return" + num1 + num2);
}

other_funct(5,8)