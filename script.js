var container = document.createElement("div");
container.className = "container";

var pad = document.createElement("div");
pad.className = "pad";

var span = document.createElement("span");
span.className = "text-right";
span.id = "span";

var para = document.createElement("p");
var br_para = form_break_create("br");

var input_html = document.createElement("input");
input_html.setAttribute("type","text");
input_html.id = "input";
input_html.className = "text-right form-control";
br_input_html = form_break_create("br");
br_input_html1 = form_break_create("br");

//Break function
function form_break_create(ele_name){
    var ele = document.createElement(ele_name);
    return ele;
}
//button function
function button_creation(button,type,value,value_attr,id_attr,class_attr){
    var ele = document.createElement(button);
    ele.setAttribute(type,button);
    ele.setAttribute(value,value_attr);
    ele.id = id_attr;
    ele.className =class_attr;
    ele.innerHTML = value_attr;
    console.log(ele);
    return ele;   
}
//First set
var seven = button_creation("button","type","value","7","seven","bg-primary text-white");
var eight = button_creation("button","type","value","8","eight","bg-primary text-white");
var nine = button_creation("button","type","value","9","nine","bg-primary text-white");
var add = button_creation("button","type","value","+","add","bg-dark text-white");
var br_add = form_break_create("br");
//Second set
var four = button_creation("button","type","value","4","four","bg-primary text-white");
var five = button_creation("button","type","value","5","five","bg-primary text-white");
var six = button_creation("button","type","value","6","six","bg-primary text-white");
var sub = button_creation("button","type","value","-","sub","bg-dark text-white");
var br_sub = form_break_create("br");
//Third set
var one = button_creation("button","type","value","1","one","bg-primary text-white");
var two = button_creation("button","type","value","2","two","bg-primary text-white");
var three = button_creation("button","type","value","3","three","bg-primary text-white");
var mul = button_creation("button","type","value","*","mul","bg-dark text-white");
var br_mul = form_break_create("br");
//Fouth set
var clear = document.createElement("button");
clear.setAttribute = ("type","button");
clear.id = "clear";
clear.className ="bg-danger text-light";
clear.innerHTML = "C";

var zero = button_creation("button","type","value","0","zero","bg-primary text-white");

var equal = document.createElement("button");
equal.setAttribute = ("type","button");
equal.id = "equal";
equal.className ="bg-success text-light";
equal.innerHTML = "=";

var div = button_creation("button","type","value","/","div","bg-dark text-white");


document.body.append(container);
container.append(pad);
pad.append(span);
span.append(para);
pad.append(br_para);
pad.append(input_html);
pad.append(br_input_html,br_input_html1);
pad.append(seven,eight,nine,add,br_add,
    four,five,six,sub,br_sub,
    one,two,three,mul,br_mul,
    clear,zero,equal,div);  

// Logic 
var one_logic = document.getElementById("one");
var two_logic = document.getElementById("two");
var three_logic = document.getElementById("three");
var four_logic = document.getElementById("four");
var five_logic = document.getElementById("five");
var six_logic = document.getElementById("six");
var seven_logic = document.getElementById("seven");
var eight_logic = document.getElementById("eight");
var nine_logic = document.getElementById("nine");
var zero_logic = document.getElementById("zero");
var add_logic = document.getElementById("add");
var sub_logic = document.getElementById("sub");
var mul_logic = document.getElementById("mul");
var div_logic = document.getElementById("div");
var clear_logic = document.getElementById("clear");
let pad_logic = document.querySelector(".pad")
let equal_logic = document.getElementById("equal")

pad_logic.addEventListener("click",display);
clear_logic.addEventListener("click",clearHistory);
equal_logic.addEventListener("click",result);

var input = document.querySelector(".pad");
var finalResult = document.querySelector("#input");
//console.log(finalResult);
result.finalResult = "";

document.body.addEventListener ("keypress",keypress);

function display(ele){
    var span_display = document.querySelector("#span");
    console.log(span_display);
    console.log(ele.target.value);
    if(ele.target.value === undefined){
        span_display.innerHTML = span_display.innerHTML+"";
    }
    else{
        span_display.innerHTML = span_display.innerHTML+ele.target.value;
    }
}
function clearHistory (){
    var span_display =  document.querySelector("#span");
    console.log(span_display);
    var finalResult = document.querySelector("#input");
    span_display.innerHTML = "";
    finalResult.value = "0";
}
function result(){
    var span_display = document.querySelector("#span");
    var finalResult =  document.querySelector("#input");
    finalResult.value = eval(span_display.innerText);
}
function calculation(num1,operator,num2){
    if(operator === "+")
        return[num1+num2];
    else if(operator === "-")
        return num1-num2;    
    else if(operator === "*")
        return num1*num2;
    else if(operator === "/")
        return num1/num2;
}

function keypress(ele){
    let span = document.querySelector("#span");
    if((ele.key<10 && ele.key>=0) || ele.key==="*" || ele.key==="-" || ele.key==="+" || ele.key==="/" ){
        span.innerText += ele.key
    }else if(ele.key==="Enter"){
        result()
    }
}
