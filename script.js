let div = document.createElement("div");
div.setAttribute("class","container col-xs-8 col-sm-8 col-md-8 col-lg-4 mt-5");
document.body.appendChild(div);
div.innerHTML =`<h1>Calculator</h1><input id="show" placeholder="0" onkeypress="typing()">
<div class="row">
  <div class="btn-group btn-outline-dark">
      <button class="btn btn-lg" onclick="cancel()"><b style="color:red">C</b></button>
      <button class="btn btn-lg" onclick="dlt()"><-</button>
      <button class="btn btn-lg" onclick="decimal()">.</button>
      <button class="btn btn-lg cut" onclick="multi()"><b style="color:blue">X</b></button>
  </div>
</div>
<div class="row">
  <div class="btn-group btn-outline-dark">
      <button class="btn btn-lg" onclick="seven()">7</button>
      <button class="btn btn-lg" onclick="eight()">8</button>
      <button class="btn btn-lg" onclick="nine()">9</button>
      <button class="btn btn-lg cut" onclick="divide()"><b style="color:blue">/</b></button>
  </div>
</div>
<div class="row">
  <div class="btn-group btn-outline-dark">
      <button class="btn btn-lg" onclick="four()">4</button>
      <button class="btn btn-lg" onclick="five()">5</button>
      <button class="btn btn-lg" onclick="six()">6</button>
      <button class="btn btn-lg cut" onclick="minus()"><b style="color:blue">-</b></button>
  </div>
</div>
<div class="row">
  <div class="btn-group btn-outline-dark">
      <button class="btn btn-lg" onclick="one()">1</button>
      <button class="btn btn-lg" onclick="two()">2</button>
      <button class="btn btn-lg" onclick="three()">3</button>
      <button class="btn btn-lg cut" onclick="plus()"><b style="color:blue">+</b></button>
  </div>
</div>
<div class="row">
  <div class="btn-group btn-outline-dark">
      <button class="btn btn-lg" onclick="zero()">0</button>
      <button class="btn btn-lg cut" onclick="doubleZero()">00</button>
      <button class="btn btn-lg col-5 btn-primary cut" onclick="equal()"><b style="color:white">=</b></button>
  </div>
</div>`;


function dlt(){
   let show = document.getElementById("show");
   show.value = show.value.slice(0,show.value.length-1);
}
function typing(){
   let show = document.getElementById("show");
   if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
      show.value += key;
   }
   else if(event.key==="Enter"){
       equal();
   }
   else{
    alert("type only numbers");
     event.preventDefault();
   }
}
function cancel(){
   let cancel = document.getElementById("show");
   cancel.value = null;
}
function zero(){
   let zero = document.getElementById("show");
   zero.value += 0;
}
function doubleZero(){
   let zero = document.getElementById("show");
   zero.value += 0;
   zero.value += 0;
}
function one(){
   let one = document.getElementById("show");
   one.value += 1;
}
function two(){
   let two = document.getElementById("show");
   two.value += 2;
}
function three(){
   let three = document.getElementById("show");
   three.value += 3;
}
function four(){
   let four = document.getElementById("show");
   four.value += 4;
}
function five(){
   let five = document.getElementById("show");
   five.value += 5;
}
function six(){
   let six = document.getElementById("show");
   six.value += 6;
}
function seven(){
   let seven = document.getElementById("show");
   seven.value += 7;
}
function eight(){
   let eight = document.getElementById("show");
   eight.value += 8;
}
function nine(){
   let nine = document.getElementById("show");
   nine.value += 9;
}
function plus(){
   let plus = document.getElementById("show");
   plus.value += "+";
}
function minus(){
   let minus = document.getElementById("show");
   minus.value += "-";
}
function divide(){
   let divide = document.getElementById("show");
   divide.value += "/";
}
function multi(){
   let mul = document.getElementById("show");
   mul.value += "*";
}
function decimal(){
   let deci = document.getElementById("show");
   deci.value+= ".";
}
function equal(){
   let value = document.getElementById("show");
   value.value = eval(value.value);
}