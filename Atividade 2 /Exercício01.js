function verificaNumeroPrimo(numero){
    if (numero == 1 || numero == 0){
        return false;
    }
    else {

        let num_div=0;

        for (let i = 2; i<=10; i++){
            if (i==numero){
                continue;
            }
            if (numero%i==0){
                num_div=num_div +1; 
                break;
            }
        }

        if (num_div>0){
            return false;
        }
        else {
            return true;
        }
    }
}

let valor1 = verificaNumeroPrimo(0);
console.log (valor1);

let valor2 = verificaNumeroPrimo(1);
console.log (valor2);

let valor3 = verificaNumeroPrimo(2);
console.log (valor3);

let valor4 = verificaNumeroPrimo(3);
console.log (valor4);

let valor5 = verificaNumeroPrimo(7);
console.log (valor5);

let valor6 = verificaNumeroPrimo(83);
console.log (valor6);

let valor7 = verificaNumeroPrimo(100);
console.log (valor7);

let valor8 = verificaNumeroPrimo(991);
console.log (valor8);

let valor9 = verificaNumeroPrimo(104729);
console.log (valor9);

let valor10 = verificaNumeroPrimo(14348907);
console.log (valor10);
