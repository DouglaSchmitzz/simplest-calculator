function calculate(n1,n2) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector) {
        case "+":
            calculation = (n1 + n2)
            document.getElementById("results").innerHTML = `The result of the sum between ${n1} + ${n2} is = ${calculation}`
            break

        case "-":
            calculation = (n1 - n2)
            document.getElementById("results").innerHTML = `The result of the subtraction between ${n1} - ${n2} is ${calculation}`
        
        case "/":
            calculation = (n1 / n2)
            if(Number.isNaN(calculo)){
                document.getElementById("results").innerHTML = `Insert a valid number` 
            } else {
            document.getElementById("results").innerHTML = `The result of the division ${n1} / ${n2} is ${calculation}`
            break
            }
        
        case "*":
            calculation = (n1 * n2)
            document.getElementById("results").innerHTML = `The result of the multiplication ${n1} * ${n2} is ${calculation}`
    }
}