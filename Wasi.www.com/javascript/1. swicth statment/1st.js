function Myfun(){
    var choice = document.getElementById("choices").value;

    alert(choice);

    switch(choice){ 
        case "add" : var a = 10;
                     var b = 20;
                     var sum = a + b;
                     document.write("addition of two number is" + sum);
                     break;
        case "sub" : var a = 10;
                     var b = 20;
                     var sub = a - b;
                     document.write("subtraction of two number is" + sub); 
                     break;
        case "mult" : var a = 10;
                     var b = 20;
                     var mult = a * b;
                     document.write("multiplication of two number is" + mult); 
                    break;        

                     default : alert("not a valid input");
    }
}
// alert("wellcome")