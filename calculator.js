//plus
plusButton = document.getElementById("plusButton");
plusOperation = function() {

  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");

  sum = parseInt(number1.value) + parseInt(number2.value);

  result = document.getElementById("result");
  result.innerText = sum;
}

plusButton.addEventListener("click", plusOperation);

//minus
minusButton = document.getElementById("minusButton");
minusOperation = function() {

  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");

  sub = parseInt(number1.value) - parseInt(number2.value);

  result = document.getElementById("result");
  result.innerText = sub;
}

minusButton.addEventListener("click", minusOperation);

//mulButton

mulButton = document.getElementById("mulButton");
mulOperation = function() {

  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");

  mul = parseInt(number1.value) * parseInt(number2.value);

  result = document.getElementById("result");
  result.innerText = mul;
}

mulButton.addEventListener("click", mulOperation);

//divButton

divButton = document.getElementById("divButton");
divOperation = function() {

  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");

  div = parseInt(number1.value) / parseInt(number2.value);

  result = document.getElementById("result");
  result.innerText = div;
}

divButton.addEventListener("click", divOperation);

//modButton

modButton = document.getElementById("modButton");
modOperation = function() {

  number1 = document.getElementById("number1");
  number2 = document.getElementById("number2");

  mod = parseInt(number1.value) % parseInt(number2.value);

  result = document.getElementById("result");
  result.innerText = mod;
}

modButton.addEventListener("click", modOperation);
