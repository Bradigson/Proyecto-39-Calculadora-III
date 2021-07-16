
let a;
let b;
let c;



function calculadora(){
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");
    let dividir = document.getElementById("dividir");
    let multiplicar = document.getElementById("multiplicar");
    let restar = document.getElementById("restar");
    let mas = document.getElementById("mas");
    let point = document.getElementById("point");
    let igual = document.getElementById("igual");
    let pantalla = document.getElementById("pantalla");
    let clear = document.getElementById("ac"); 


    clear.onclick = function(e){
        pantalla.textContent = "";
    }
    one.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "1";
    }
    two.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "2";
    }
    three.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "3";
    }
    four.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "4";
    }
    five.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "5";
    }
    six.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "6";
    }
    seven.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "7";
    }
    eight.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "8";
    }
    nine.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "9";
    }
    zero.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "0";
    }
  
   


    mas.onclick = function(e){
        a = pantalla.textContent;
        c ="+";
        limpiar();
        
    }
    restar.onclick = function(e){
        a = pantalla.textContent;
        c = "-";
        limpiar();
        
    }  
    multiplicar.onclick = function(e){
        a = pantalla.textContent;
        c = "*";
        limpiar();
    }
    dividir.onclick = function(e){
        a = pantalla.textContent;
        c = "/";
        limpiar();
        
    }


    igual.onclick = function(e){
        b = pantalla.textContent;
        resolver();
    }
}

function limpiar(){
    pantalla.textContent = "";
}
function resolver(){
    let res = 0;
    switch(c){
        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            res = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            res = parseFloat(a) / parseFloat(b);
                        
    }
    pantalla.textContent = res;
}
