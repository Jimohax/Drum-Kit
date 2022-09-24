let output = [];
// i = 0;

function fibonacciGenerator(n){

    
for( i=0; i<=n; i++){

    if( i === 0 ){
        output.push(0);
    }else if(i === 1){
        output.push(1);
    } else {

        last = output[output.length - 1]
        secondLast = output[output.length - 2]
        sum = last + secondLast
        output.push(sum)
        
     
    }
// output.push(i);


}
// while (i<=5) {
//    output.push(i); 
//    console.log(output);
//    i++;
// };
console.log(output);
}

fibonacciGenerator(5);

// output = [0,1,2];

// sum = output[1]+ output[2]
// output.push(sum);

// console.log(output.length - 1 + output.length);
