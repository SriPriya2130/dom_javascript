/*var a=10
var b=20
console.log(a+b)  //var is global variable

{
   let a=10
    let b=20
    console.log(a+b) // let is local & block variable
}

const weekdays=7
weekdays=5
console.log(weekdays) // constant  variable 

var price=70
var product="coconutoil"  // string
var tax=5
console.log(product)
var total=price+tax
console.log(total)

var fruitname="Apple"
var count=10
var price=10
var total=count*price
console.log(fruitname)
console.log(total)

//OPERATORS
var a=10
var b=10
c=a+b
console.log(c)

var a=10
a++    // a+1   post increment
console.log(a)

let a=10
++a    //a+1    pre increment   { a=11 ans a is when again not meet to the a it meet as a ++ symbol it will added a one value this pre 
//increment operator}
console.log(a)

var a=10
a--    //a-1  post decrement
console.log(a)

var a=10
--a   //a-1  pre decrement  { a=11 ans a is when again not meet to the a it meet as a ++ symbol it will minus a one value this pre 
//decrement operator}
console.log(a)

var a=10
var b=a++
console.log(b) 
//{b=10 ans a is when again meet a that time a will be added one value} 

//DATATYPES
var a=10
console.log(typeof(a)) //number
var b="Apple"
console.log(typeof(b)) //string
var c=true
console.log(typeof(c)) //boolean
var d
console.log(typeof(d)) //undefined
null //is referred to obj


var a=10    //addition function
var b=10
function add(){
    console.log("Total is: "+(a+b))
}
add()

//FUNCTION
function samsung(){
    console.log("Samsung is working")
}
samsung()

function redmi(){
    console.log("redmi is working")
}
redmi()

function iphone(){
    console.log("iphone is working")
}
iphone()

function oppo(){
    console.log("oppo is working")
}
oppo()

var factor="Sivakarthikeyan"
var fplayer="Harthik Pandiya"
var fmovie="Chiththa"
function favourite(){
    console.log("Favourite Actor: "+factor)
    console.log("Favourite Player: "+fplayer)
    console.log("Favourite Movie: "+fmovie)
}
favourite()

function add(a,b){ (parameters)
    console.log(a+b) 
}
add(10,20)

function area(l, b){
    var a=l*b
    console.log("The area is: "+a)
}
area(5,4)

function myname(){
    return "Priya"
}
var a=myname()
console.log(a)

function mul(a,b){
    return a*b  //() is not necessary
}
var c=mul(10,20)
console.log(c)

// CONDITIONAL STATEMENT IF ELSE
var a=10
if (a%2==0){
    console.log("Even number")
}
else {
    console.log("odd number")
}

//Raining in outside?
var rain =false
if (rain){
    console.log("Rain is coming")
}
else {
    console.log("rain is not coming")
}

//did you complete your homework?
var hw=true
if (hw){
    console.log("Great job")
}
else{
    console.log("Finish your homework before playing")
}

//are there any cookies left?
var cookies=false
if(cookies){
    console.log("Would you like cookies?")
}
else{
    console.log("Time to bake more cookies")
}

//Did you brush teeth daily?
var brush=false
if (brush){
    console.log("Your teeth are clean")
}
else{
    console.log("Go brush your teeth now")
}

// LOGICAL AND   {it will chk both condition both are true it will be true & one is false it will return false}
var a=20
if (a%2==0 && a>25){
    console.log("Even number")
}
else{
    console.log("Odd number")
}

//LOGICAL OR   {it will chk both condition  one is true it will return true}
var a=10
if (a%2==0||a>20){
    console.log("true")
}
else{
    console.log("false")
}

// NOT 
var a=2
if (a%2==1){
    console.log("true")
}
else{
    console.log("false")
}*/

// FOR LOOP 
/*for (var a=0; a<=5; a++){
    console.log(a)
}

for (count=1; count<=10; count++){
    console.log("John")
}

//PRINT EVEN NUMBER
for (var a=0; a<=10; a++){
    if(a%2==0){
        console.log(a)
    } 
}

//PRINT ODD NUMBER
for (var a=0; a<=10; a++){
    if (a%2!=0){
        console.log(a)
    }
}

//PRINT 2 TABLE
for (let i=1; i<=10; i++){
    console.log(`${i}*${2}=${i*2}`)
}

//RANDOM NUMBER
var a=Math.random()
console.log(a*10)

//MATH>FLOOR NUMBER
var a=Math.floor(1.99)
console.log(a)*/